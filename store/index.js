import { Auth } from 'aws-amplify'
export const state = () => ({
  userInfo: {},
  isSignedIn: false,
  result: {},
  owner: '',
  identityId: '',
  userId: '',
  isMaster: false,
  plan: '',
  limitAws: 100,
  username: '',
  password: '',
  editProfile: false,
  editEvent: false
})
// 状態を更新するための処理
export const mutations = {
  setLimitAws(state, limitAws = state.limitAws) {
    state.limitAws = limitAws
  },
  setUserInfo(state, userInfo = state.userInfo) {
    state.userInfo = userInfo
  },
  setIsSignedIn(state, isSignedIn = state.isSignedIn) {
    state.isSignedIn = isSignedIn
  },
  setResult(state, result = state.result) {
    state.result = result
  },
  setOwner(state, owner = state.owner) {
    state.owner = owner
  },
  setIdentityId(state, identityId = state.identityId) {
    state.identityId = identityId
  },
  setUserId(state, userId = state.userId) {
    state.userId = userId
  },
  setIsMaster(state, isMaster = state.isMaster) {
    state.isMaster = isMaster
  },
  setUsername(state, username = state.username) {
    state.username = username
  },
  setPassword(state, password = state.password) {
    state.password = password
  },
  setEditProfile(state, editProfile = state.editProfile) {
    state.editProfile = editProfile
  },
  setEditEvent(state, editEvent = state.editEvent) {
    state.editEvent = editEvent
  }
}
export const actions = {
  async signUp({ commit }, { username, password }) {
    await Auth.signUp({
      username: username,
      password: password
    })
      .then((e) => {
        commit('setResult', e)
      })
      .catch((error) => {
        this.error = error
        switch (error.code) {
          case 'UsernameExistsException':
            // ユーザープール内に既に同じ username が存在する場合に起こる。
            return '既に同じメールアドレスのアカウントが存在します'
          case 'InvalidPasswordException':
            // ユーザープールのポリシーで設定したパスワードの強度を満たさない場合に起こる。
            return '設定したパスワードが必要な条件を満たしていません'
          case 'InvalidParameterException':
            // 必要な属性が足りない場合や、入力された各項目が Cognito 側で正しくパースできない場合（バリデーションエラー）に起こる。
            // password が6文字未満の場合はバリデーションエラーでこちらのエラーコードが返ってくる。
            return '必要な項目が足りないか、正しく認識することができませんでした'
          default:
            // その他のエラー
            console.log(error.message)
            commit('setResult', error)
        }
      })
  },
  async confirmSignUp({ commit }, { username, passcode }) {
    await Auth.confirmSignUp(username, passcode)
      .then((e) => {
        commit('setResult', e)
      })
      .catch((error) => {
        this.error = error
        switch (error.code) {
          case 'CodeMismatchException':
            // 無効なコードが入力された場合に起こる。
            return '無効なコードが入力されました'
          case 'LimitExceededException':
            // コードを間違え続けた場合に起こる。
            return '規定回数以上コードを間違えて入力されました'
          case 'ExpiredCodeException':
            // コードが期限切れ（24時間をオーバー）した場合に起こる。
            // 注) username が存在しない・無効化されている場合にも起こる。
            return 'コードの期限が切れているか、登録いただいたメールアドレスが存在しません'
          case 'NotAuthorizedException':
            // 既にステータスが CONFIRMED になっている場合に起こる。
            return '既に確認済みです'
          case 'CodeDeliveryFailureException':
            // 検証コードの送信に失敗した場合に起こる。
            return '検証コードの送信に失敗しました'
          default:
            // その他のエラー
            console.log(error.message)
            commit('setResult', error)
        }
      })
  },
  async signIn({ commit, dispatch }, { username, password }) {
    await Auth.signIn(username, password)
      .then((user) => {
        dispatch('initializeStore')
        if (
          user.signInUserSession.accessToken.payload['cognito:groups'] &&
          user.signInUserSession.accessToken.payload['cognito:groups'][0] ===
            'Master'
        ) {
          commit('setIsMaster', true)
        } else {
          commit('setIsMaster', false)
        }
        commit('setIsSignedIn', true)
        commit('setUsername', username)
        commit('setPassword', password)
        commit('setUserInfo', user.attributes)
      })
      .catch((error) => {
        console.log('Error:' + error.message)
        commit('setResult', error)
        $nuxt.$router.push('/login/')
      })
  },
  async resendSignUp({ commit }, { username }) {
    await Auth.resendSignUp(username)
      .then((e) => {
        commit('setResult', e)
      })
      .catch((error) => {
        switch (error.code) {
          case 'CodeDeliveryFailureException':
            // 検証コードの送信に失敗した場合に起こる。
            return '検証コードの送信に失敗しました'
          default:
            // その他のエラー
            console.log(error.message)
            commit('setResult', error)
        }
      })
  },
  async signOut() {
    try {
      await Auth.signOut()
    } catch (error) {
      console.log(error.message)
      commit('setResult', error)
    }
  },
  async updateUserAttributes({ commit }, { user, email }) {
    await Auth.updateUserAttributes({
      user: user,
      attributes: {
        email: email
      }
    })
      .then((e) => {
        commit('setResult', e)
      })
      .catch((error) => {
        console.log(error.message)
        commit('setResult', error)
      })
  },
  async changePassword({ commit }, { user, oldPassword, newPassword }) {
    await Auth.changePassword(user, oldPassword, newPassword)
      .then((e) => {
        commit('setResult', e)
      })
      .catch((error) => {
        console.log(error.message)
        commit('setResult', error)
      })
  },
  initializeStore({ commit }) {
    commit('setUserInfo', {})
    commit('setResult', {})
    commit('setOwner', '')
    commit('setIdentityId', '')
    commit('setUserId', '')
    commit('setPlan', '')
    commit('setIsMaster', false)
    commit('setEditProfile', false)
    commit('setEditEvent', false)
  }
}
export const getters = {
  isSignedIn: (state) => {
    return state.isSignedIn
  },
  editEvent: (state) => {
    return state.editEvent
  },
  editProfile: (state) => {
    return state.editProfile
  }
}
