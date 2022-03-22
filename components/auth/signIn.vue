<template>
  <v-form
    ref="signIn"
    v-model="valid"
    lazy-validation
    class="d-flex flex-wrap flex-row justify-space-around sign_in"
  >
    <v-card-text class="pa-0 pt-4 text-caption text-sm-body-2">
      3.ログイン
    </v-card-text>
    <v-card-text class="pa-0 pt-4 text-caption text-sm-body-2">
      メールアドレス
      <v-text-field
        v-model.trim.lazy="username"
        color="#262626"
        :rules="emailRules"
        type="text"
        dense
        @keydown="ctrlEnterSubmit($event)"
      />
    </v-card-text>
    <v-card-text class="pa-0 text-caption text-sm-body-2">
      パスワード
      <v-text-field
        v-model.trim.lazy="password"
        color="#262626"
        :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[passwordRules.required, passwordRules.min]"
        :type="passwordVisible ? 'text' : 'password'"
        dense
        :autocomplete="passwordVisible ? 'username' : 'current-password'"
        @click:append="passwordVisible = !passwordVisible"
        @keydown="ctrlEnterSubmit($event)"
      />
    </v-card-text>
    <v-btn
      :disabled="!valid"
      color="#262626"
      depressed
      dense
      outlined
      class="mx-0 mt-5 mb-10 px-0"
      width="-webkit-fill-available"
      @click="submit"
    >
      ログイン
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      passwordVisible: false
    }
  },
  computed: {
    emailRules() {
      return [
        (v) => !!v || 'メールアドレスは必須項目です',
        (v) => /.+@.+/.test(v) || '有効なメールアドレスを入力してください'
      ]
    },
    passwordRules() {
      return {
        required: (value) => !!value || 'パスワードは必須項目です',
        min: (v) => (!v ? true : (v && v.length >= 8) || '8文字以上必要です'),
        checkPassword: (v) =>
          /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)[a-zA-Z\\d]{8,32}$/.test(v) ||
          '半角数字・半角英字の大文字・小文字をそれぞれ１文字以上含んでください'
      }
    }
  },
  mounted() {
    this.$refs.signIn.reset()
  },
  methods: {
    submit() {
      if (this.$refs.signIn.validate()) {
        // console.log(
        //   `SIGN IN username: ${this.username}, password: ${this.password}`
        // )
        this.$store.dispatch('signIn', {
          username: this.username,
          password: this.password
        })
      } else {
        alert(
          'ステータス：validation Error \nメッセージ：必要項目が全て正しく入力されているか確認して下さい。'
        )
      }
    },
    ctrlEnterSubmit(event) {
      if (event.ctrlKey) {
        if (event.key === 'Enter') {
          this.submit()
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.sign_in {
  width: -webkit-fill-available;
  max-width: 400px;
  padding: 0 16px;
  margin: 0 auto 30px;
}
</style>
