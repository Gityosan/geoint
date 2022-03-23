import { Auth } from 'aws-amplify'

export const state = () => ({
  userInfo: {},
  isSignedIn: false,
  owner: ''
})

export const mutations = {
  setUserInfo(state, userInfo = state.userInfo) {
    state.userInfo = userInfo
  },
  setIsSignedIn(state, isSignedIn = state.isSignedIn) {
    state.isSignedIn = isSignedIn
  },
  setOwner(state, owner = state.owner) {
    state.owner = owner
  }
}

export const actions = {
  async signUp({ commit }, { username, password }) {
    await Auth.signUp({
      username,
      password
    })
      .then((e) => {
        alert(
          'アカウントを仮作成して、確認コードをメールアドレス宛にに送りました。\nご確認ください。'
        )
      })
      .catch((e) => {
        alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
        switch (e.code) {
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
            console.log(e.message)
        }
        throw new Error('error')
      })
  },
  async confirmSignUp({ commit }, { username, passcode }) {
    await Auth.confirmSignUp(username, passcode)
      .then((e) => {
        alert('認証できました。')
      })
      .catch((e) => {
        alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
        throw new Error('error')
        // switch (e.code) {
        //   case 'CodeMismatchException':
        //     // 無効なコードが入力された場合に起こる。
        //     return '無効なコードが入力されました'
        //   case 'LimitExceededException':
        //     // コードを間違え続けた場合に起こる。
        //     return '規定回数以上コードを間違えて入力されました'
        //   case 'ExpiredCodeException':
        //     // コードが期限切れ（24時間をオーバー）した場合に起こる。
        //     // 注) username が存在しない・無効化されている場合にも起こる。
        //     return 'コードの期限が切れているか、登録いただいたメールアドレスが存在しません'
        //   case 'NotAuthorizedException':
        //     // 既にステータスが CONFIRMED になっている場合に起こる。
        //     return '既に確認済みです'
        //   case 'CodeDeliveryFailureException':
        //     // 確認コードの送信に失敗した場合に起こる。
        //     return '認証コードの送信に失敗しました'
        //   default:
        //     // その他のエラー
        //     console.log(e.message)
        // }
      })
  },
  async signIn({ commit, dispatch }, { username, password }) {
    await Auth.signIn(username, password)
      .then(async (user) => {
        await dispatch('initializeStore')
        commit('setIsSignedIn', true)
        commit('setUserInfo', user.attributes)
      })
      .catch((e) => {
        alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
        throw new Error('error')
      })
  },
  async resendSignUp({ commit }, { username }) {
    await Auth.resendSignUp(username)
      .then(() => {
        alert('確認コードを再送信しました。')
      })
      .catch((e) => {
        switch (e.code) {
          case 'CodeDeliveryFailureException':
            // 確認コードの送信に失敗した場合に起こる。
            alert(
              'ステータス：' +
                e.code +
                '\nメッセージ：確認コードの送信に失敗しました。'
            )
            return '確認コードの送信に失敗しました'
          default:
            // その他のエラー
            alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
        }
        throw new Error('error')
      })
  },
  async signOut({ commit }) {
    await Auth.signOut().catch((e) => {
      alert('ステータス：' + e.code + ' \nメッセージ：' + e.message)
      throw new Error('error')
    })
  },
  async updateUserAttributes({ commit }, { email }) {
    const user = await Auth.currentAuthenticatedUser()
    await Auth.updateUserAttributes(user, {
      email
    })
      .then(() => {
        alert('メールアドレスを変更しました。')
      })
      .catch((e) => {
        alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
        throw new Error('error')
      })
  },
  async changePassword({ commit }, { oldPassword, newPassword }) {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, oldPassword, newPassword)
      })
      .then(() => {
        alert('パスワードを変更しました。')
      })
      .catch((e) => {
        alert('ステータス：' + e.code + ' \nメッセージ：' + e.message)
        throw new Error('error')
      })
  },
  initializeStore({ commit }) {
    commit('setUserInfo', {})
    commit('setOwner', '')
  }
}
export const getters = {
  isSignedIn: (state) => {
    return state.isSignedIn
  }
}
