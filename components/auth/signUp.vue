<template>
  <v-form ref="account" v-model="valid" lazy-validation class="sign_up">
    <v-card-text class="pa-0 text-caption text-sm-body-2">
      メールアドレス
      <v-text-field
        v-model.trim.lazy="username"
        :rules="emailRules"
        dense
        required
      />
    </v-card-text>
    <v-card-text class="pa-0 text-caption text-sm-body-2">
      パスワード
      <v-text-field
        v-model.trim.lazy="password"
        :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="passwordVisible ? 'text' : 'Password'"
        name="password"
        hint="少なくも8文字以上必要です"
        counter
        dense
        :autocomplete="passwordVisible ? 'username' : 'current-password'"
        required
        @click:append="passwordVisible = !passwordVisible"
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
      @click="submit()"
    >
      作成
    </v-btn>
    <v-divider></v-divider>
    <v-card-text class="pa-0 pt-4 text-caption text-sm-body-2">
      メールアドレス
      <v-card-text class="pa-0 pb-4">{{ username }}</v-card-text>
    </v-card-text>
    <v-card-text class="pa-0 text-caption text-sm-body-2">
      確認コード
      <v-otp-input
        v-model.lazy="code"
        :length="length"
        type="number"
        :disabled="loading"
        @finish="confirm()"
      />
      <v-overlay absolute :value="loading">
        <v-progress-circular
          indeterminate
          color="#607d8b"
        ></v-progress-circular>
      </v-overlay>
    </v-card-text>
    <v-btn
      color="#262626"
      depressed
      dense
      outlined
      class="mx-0 my-2 pa-0"
      width="-webkit-fill-available"
      :disabled="loading"
      @click="resend()"
    >
      再送信
    </v-btn>
    <!-- <v-btn
      :disabled="(code ? code.length !== length : true) || loading"
      color="#262626"
      depressed
      dense
      outlined
      class="mx-0 my-2 pa-0"
      width="-webkit-fill-available"
      @click="confirm()"
    >
      認証
    </v-btn> -->
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    loading: false,
    username: '',
    password: '',
    passwordVisible: false,
    code: '',
    length: 6
  }),
  computed: {
    emailRules: () => [
      (v) => !!v || 'メールアドレスは必須項目です',
      (v) => /.+@.+/.test(v) || '有効なメールアドレスを入力してください'
    ],
    passwordRules: () => [
      (v) => !!v || 'パスワードは必須項目です',
      (v) => (!v ? true : (v && v.length >= 8) || '8文字以上必要です'),
      (v) => (!v ? true : (v && v.length <= 32) || '32文字までです'),
      (v) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\S]{8,32}$/.test(v) ||
        '半角数字・半角英字の大文字・小文字をそれぞれ１文字以上含んでください'
    ]
  },
  mounted() {
    this.$refs.account.reset()
  },
  methods: {
    submit() {
      if (this.$refs.account.validate()) {
        this.$store
          .dispatch('signUp', {
            username: this.username,
            password: this.password
          })
          .then(() => {
            console.log(
              `SIGN UP username: ${this.username}, password: ${this.password}, email: ${this.username}`
            )
          })
      } else {
        alert(
          'ステータス：validation Error \nメッセージ：必要項目が全て正しく入力されているか確認して下さい。'
        )
      }
    },
    confirm() {
      this.loading = true
      this.$store
        .dispatch('confirmSignUp', {
          username: this.username,
          passcode: this.code
        })
        .then(() => {
          console.log(`CONFIRM username: ${this.username}, code: ${this.code}`)
          this.$emit('stepperFunc')
        })
        .catch(() => {
          // alert('再送信に失敗しました。')
        })
        .finally(() => {
          this.loading = false
        })
    },
    resend() {
      this.$store
        .dispatch('resendSignUp', {
          username: this.username
        })
        .then(() => {
          console.log(`RESEND username: ${this.username}`)
        })
        .catch(() => {
          console.log('再送信に失敗しました。')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.sign_up {
  width: -webkit-fill-available;
  max-width: 400px;
  margin: 0 auto 30px;
  padding: 0 16px;
}
</style>
