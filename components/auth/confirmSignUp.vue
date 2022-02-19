<template>
  <v-form
    ref="confirm"
    lazy-validation
    class="d-flex flex-wrap flex-row justify-space-around"
  >
    <v-card-text class="text-caption text-sm-body-2">
      メールアドレス
      <v-text-field v-model.trim.lazy="username" dense :rules="emailRules" />
    </v-card-text>
    <v-card-text class="text-caption text-sm-body-2">
      確認コード
      <v-otp-input v-model.trim.lazy="code" :length="length" />
    </v-card-text>
    <v-btn
      color="#262626"
      depressed
      dense
      outlined
      class="mx-5 my-2 px-0"
      width="90%"
      @click="resend"
    >
      再送信
    </v-btn>
    <v-btn
      :disabled="code.length !== length"
      color="#262626"
      depressed
      dense
      outlined
      class="mx-5 my-2 px-0"
      width="90%"
      @click="submit"
    >
      認証
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'ComfirmSignUp',
  data() {
    return {
      valid: false,
      username: '',
      code: '',
      length: 6
    }
  },
  computed: {
    emailRules() {
      return [
        (v) => !!v || 'メールアドレスは必須項目です',
        (v) => /.+@.+/.test(v) || '有効なメールアドレスを入力してください'
      ]
    }
  },
  mounted() {
    this.$refs.confirm.reset()
  },
  methods: {
    submit() {
      if (this.$refs.confirm.validate()) {
        console.log(`CONFIRM username: ${this.username}, code: ${this.code}`)

        this.$store
          .dispatch('confirmSignUp', {
            username: this.username,
            passcode: this.code
          })
          .then(() => {
            this.$emit('stepperFunc')
          })
      } else {
        alert(
          'ステータス：validation Error \nメッセージ：必要項目が全て正しく入力されているか確認して下さい。'
        )
      }
    },
    resend() {
      console.log(`RESEND username: ${this.username}`)
      this.$store.dispatch('resendSignUp', {
        username: this.username
      })
    }
  }
}
</script>
