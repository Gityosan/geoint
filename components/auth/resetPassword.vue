<template>
  <v-card width="400px" class="mx-auto mt-5 password-reset" flat>
    <v-card-text>
      パスワード再設定
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
          古いパスワード
          <v-text-field
            v-model.trim.lazy="oldPassword"
            :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="visible ? 'text' : 'password'"
            name="password"
            counter
            @click:append="visible = !visible"
          />
        </v-card-text>
        <v-card-text>
          新しいパスワード
          <v-text-field
            v-model.trim.lazy="newPassword"
            :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="visible ? 'text' : 'password'"
            name="password"
            hint="8文字以上・半角英字大文字小文字数字を含む"
            persistent-hint
            counter
            @click:append="visible = !visible"
          />
        </v-card-text>
        <v-btn
          outlined
          dense
          :disabled="!valid"
          color="#262626"
          @click="changePassword()"
        >
          送信
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    newPassword: '',
    oldPassword: '',
    visible: false
  }),
  computed: {
    passwordRules: () => [
      (v) => !!v || 'パスワードは必須項目です',
      (v) => (!v ? true : (v && v.length >= 8) || '8文字以上必要です'),
      (v) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\S]{8,32}$/.test(v) ||
        '半角数字・半角英字の大文字・小文字をそれぞれ１文字以上含んでください'
    ]
  },
  mounted() {
    this.$refs.form.reset()
  },
  methods: {
    changePassword() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('changePassword', {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
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
