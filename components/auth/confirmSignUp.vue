<template>
  <v-card width="400px" class="mx-auto mt-5 confirm" flat>
    <v-card-title>
      <h1 class="display-1">ComfirmSignup</h1>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          v-model="username"
          :rules="emailRules"
          label="メールアドレス"
          required
        />
        <v-text-field
          v-model="code"
          :rules="codeRules"
          label="確認コード"
          required
        />
        <v-row justify="center" align="center">
          <v-btn
            :disabled="!valid"
            @click="submit"
            color="primary"
            width="40vw"
            rounded
            class="mt-5 mr-3 ml-3"
            >確認</v-btn
          >
          <v-btn
            @click="resend"
            color="primary"
            width="40vw"
            rounded
            class="mt-5 mr-3 ml-3"
            >確認コードの再送</v-btn
          >
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'ComfirmSignUp',
    data() {
      return {
        valid: false,
        username: '',
        code: ''
      }
    },
    computed: {
      emailRules() {
        return [
          (v) => !!v || 'メールアドレスは必須項目です',
          (v) => /.+@.+/.test(v) || '有効なメールアドレスを入力してください'
        ]
      },
      codeRules() {
        return [
          (v) => !!v || '確認コードは必須項目です',
          (v) => (v && v.length === 6) || '確認コードは6桁です'
        ]
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          console.log(`CONFIRM username: ${this.username}, code: ${this.code}`)
        }
        this.$store
          .dispatch('confirmSignUp', {
            username: this.username,
            passcode: this.code
          })
          .then(() => {
            this.$emit('stepperFunc')
          })
      },
      resend() {
        console.log(`RESEND username: ${this.username}`)
        const result = this.$store.dispatch('resendSignUp', {
          username: this.username
        })
      }
    }
  }
</script>
