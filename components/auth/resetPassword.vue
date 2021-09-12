<template>
  <v-card width="400px" class="mx-auto mt-5 password-reset" flat>
    <v-card-title>
      <h1 class="display-1">パスワード再設定</h1>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          v-model="oldPassword"
          :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="passwordVisible ? 'text' : 'password'"
          name="password"
          label="古いパスワード"
          counter
          @click:append="passwordVisible = !passwordVisible"
          required
        />
        <v-text-field
          v-model="newPassword"
          :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="passwordVisible ? 'text' : 'password'"
          name="password"
          label="新しいパスワード"
          hint="少なくも8文字以上必要です"
          counter
          @click:append="passwordVisible = !passwordVisible"
          required
        />
        <v-btn :disabled="!valid" @click="changePassword" color="primary"
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
        newPassword: '',
        oldPassword: '',
        passwordVisible: false
      }
    },
    computed: {
      passwordRules() {
        return {
          required: (value) => !!value || 'パスワードは必須項目です',
          min: (v) => v.length >= 8 || '少なくも8文字以上必要です',
          emailMatch: () => '入力したメールアドレスとパスワードが一致しません'
        }
      }
    },
    methods: {
      changePassword() {
        if (this.$refs.form.validate()) {
          console.log(`Password Reset username: ${this.username}`)
        }
        const userInfo = this.$store.state.userInfo
        const result = this.$store.dispatch('changePassword', {
          user: userInfo,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        })
        console.log(result)
      }
    }
  }
</script>
