<template>
  <v-card width="400px" class="mx-auto mt-5 password-reset" flat>
    <v-card-text>
      メールアドレス再設定
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="9">
            <v-text-field
              v-model.trim.lazy="mailAddress"
              :rules="emailRules"
              hint="新規メールアドレスを入力してください"
              persistent-hint
              dense
            />
          </v-col>
          <v-col cols="3">
            <v-btn
              outlined
              dense
              :disabled="!valid"
              color="#262626"
              @click="updateUserAttributes()"
            >
              送信
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    mailAddress: '',
    passwordVisible: false
  }),
  computed: {
    emailRules: () => [
      (v) => !!v || 'メールアドレスは必須項目です',
      (v) => /.+@.+/.test(v) || '有効なメールアドレスを入力してください'
    ]
  },
  mounted() {
    this.$refs.form.reset()
  },
  methods: {
    updateUserAttributes() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('updateUserAttributes', {
            email: this.mailAddress
          })
          .then(() => {
            console.log(`Password Reset mailAddress: ${this.mailAddress}`)
          })
      } else {
        alert(
          'ステータス：validation Error \nメッセージ：必要項目が全て正しく入力されているか確認して下さい。'
        )
      }
    }
  }
}
</script>
