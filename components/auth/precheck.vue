<template>
  <v-form
    ref="precheck"
    v-model="valid"
    width="100%"
    class="mx-auto mb-5 px-4 py-0"
    lazy-validation
  >
    <v-card-text class="pa-0 text-caption text-sm-body-2">
      医院名
      <v-text-field
        v-model.lazy="spreadsheetClinicName"
        color="#262626"
        dense
        type="text"
      />
    </v-card-text>
    <v-card-text class="pa-0 text-caption text-sm-body-2">
      パスワード
      <v-text-field
        v-model.trim.lazy="spreadsheetPassword"
        color="#262626"
        :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
        :type="passwordVisible ? 'text' : 'Password'"
        hint="事前にエクスコアからお伝えしているパスワードです"
        persistent-hint
        counter
        dense
        reqiered
        @click:append="passwordVisible = !passwordVisible"
      />
    </v-card-text>
    <v-btn
      :disabled="!valid"
      color="#262626"
      depressed
      dense
      outlined
      class="mx-0 my-5 px-0"
      width="-webkit-fill-available"
      @click="check()"
    >
      確認
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    passwordVisible: false,
    spreadsheetClinicName: '',
    spreadsheetPassword: ''
  }),
  mounted() {
    this.$refs.precheck.reset()
  },
  methods: {
    async check() {
      if (this.$refs.precheck.validate()) {
        await this.$axios
          .get('/spreadsheet/', {
            crossDomain: true,
            params: {
              ClinicName: this.spreadsheetClinicName,
              Password: this.spreadsheetPassword
            }
          })
          .then((result) => {
            // console.log(result)
            this.allowSignUp = !!result.data.data.status
            if (!result.data.data.status) {
              alert(
                'ステータス：' +
                  result.status +
                  '\nメッセージ：医院名かパスワードが一致しません'
              )
            } else {
              this.$refs.precheck.resetValidation()
              this.$emit('stepperFunc')
            }
          })
          .catch((e) => {
            alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
            console.log(e)
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
<style lang="scss" scoped>
// .v-enter,
// .v-leave-to {
//   opacity: 0;
//   transform: translateX(-100%);
// }
// .v-enter-to,
// .v-leave {
//   transform: translateX(0);
// }
// .v-enter-active,
// .v-leave-active {
//   transition: opacity 1s, transform 1s;
// }
</style>
