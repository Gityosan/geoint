<template>
  <v-card width="400px" class="mx-auto mt-5 sign-up" key="signUp" flat>
    <v-card-title>
      <h1 class="display-1">SignUp</h1>
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
          v-model="password"
          :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="passwordVisible ? 'text' : 'Password'"
          name="password"
          label="パスワード"
          hint="少なくも8文字以上必要です"
          counter
          @click:append="passwordVisible = !passwordVisible"
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
          >
            Send
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  .v-enter-to,
  .v-leave {
    transform: translateX(0);
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s, transform 1s;
  }
</style>
<script>
  export default {
    name: 'SignUp',
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
          required: (v) => !!v || 'パスワードは必須項目です',
          min: (v) => v.length >= 8 || '少なくも8文字以上必要です',
          checkPassword: (v) =>
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)[a-zA-Z\\d]{8,32}$/.test(v) ||
            '半角数字・半角英字の大文字・小文字をそれぞれ１文字以上含んでください'
        }
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          console.log(
            `SIGN UP username: ${this.username}, password: ${this.password}, email: ${this.username}`
          )
          this.$store
            .dispatch('signUp', {
              username: this.username,
              password: this.password
            })
            .then(() => {
              this.$emit('stepperFunc')
            })
        }
      }
    }
  }
</script>
