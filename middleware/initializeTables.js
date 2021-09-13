import { API, Auth } from 'aws-amplify'
import { listUsers } from '@@/src/graphql/queries.js'
import { createUser, createUserImage } from '@@/src/graphql/mutations.js'

// ログイン後の共通処理
// 元々、pluginsのsetIds関数などにあった処理を一部変えて移植
export default async function ({ store }) {
  if (store.state.isMaster) {
    await Auth.currentAuthenticatedUser()
      .then((res) => {
        if (
          res.signInUserSession.accessToken.payload['cognito:groups'][0] ===
          'Master'
        ) {
          store.commit('setIsMaster', true)
        } else {
          store.commit('setIsMaster', false)
        }
      })
      .catch((err) => {
        console.log('currentAuthenticatedUser', err)
      })
  }

  if (store.state.identityId.length === 0) {
    await Auth.currentUserCredentials()
      .then((credentials) => {
        store.commit('setIdentityId', credentials.identityId)
      })
      .catch((err) => {
        console.log('currentUserCredentials', err)
      })
  }
  if (store.state.owner.length === 0) {
    await Auth.currentUserInfo()
      .then((userInfo) => {
        store.commit('setOwner', userInfo.username)
      })
      .catch((err) => {
        console.log('currentUserInfo', err)
      })
  }
  if (!store.state.isMaster && store.state.userId.length === 0) {
    async function createTables() {
      await API.graphql({
        query: createUserImage,
        variables: {
          input: {
            identityId: store.state.identityId,
            owner: store.state.owner
          }
        }
      })
        .then(async (res) => {
          await API.graphql({
            query: createUser,
            variables: {
              input: {
                userImageId: res.data.createUserImage.userImageId,
                status: 'everyone',
                identityId: store.state.identityId,
                owner: store.state.owner
              }
            }
          }).catch((e) => {
            console.log('createUser', e)
          })
        })
        .catch((e) => {
          console.log('createUserImage', e)
        })
    }
    await API.graphql({
      query: listUsers,
      variables: {
        filter: { input: { owner: { eq: store.state.owner } } }
      }
    })
      .then(async (res) => {
        if (res.data && !res.data.listUsers.items.length) {
          await createTables().then((res) => {
            store.commit('setUserId', res.data.listUsers.items[0].userId)
          })
        } else {
          store.commit('setUserId', res.data.listUsers.items[0].userId)
        }
      })
      .catch(async (err) => {
        if (err.data && !err.data.listUsers.items.length) {
          await createTables().then((res) => {
            store.commit('setUserId', res.data.listUsers.items[0].userId)
          })
        } else {
          console.log('listUsers', err)
        }
      })
  }
}
