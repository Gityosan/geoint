<template>
  <v-card width="400px" class="mx-auto mt-5 password-reset" flat>
    <v-card-title>
      <h1 class="display-1">メールアドレス再設定</h1>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          v-model="mailAddress"
          :rules="emailRules"
          label="メールアドレス"
          required
        />
        <v-btn :disabled="!valid" @click="updateUserAttributes" color="primary"
          >送信</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'ResetPasswords',
    data() {
      return {
        valid: false,
        mailAddress: '',
        passwordVisible: false
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
    methods: {
      updateUserAttributes() {
        if (this.$refs.form.validate()) {
          console.log(`Password Reset username: ${this.username}`)
        }
        const userInfo = this.$store.state.userInfo
        const result = this.$store.dispatch('updateUserAttributes', {
          user: userInfo,
          email: this.mailAddress
        })
        console.log(result)
      }
    }
  }
</script>
