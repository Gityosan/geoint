<template>
  <v-card flat>
    <v-stepper v-model="e1" alt-labels non-linear flat>
      <v-stepper-items>
        <v-stepper-content step="1">
          <AuthSignUp @stepperFunc="setEl(2)" />
        </v-stepper-content>

        <v-stepper-content step="2">
          <AuthConfirmSignUp @stepperFunc="setEl(3)" />
        </v-stepper-content>

        <v-stepper-content step="3">
          <AuthSignIn />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-row justify="center" align="center">
      <v-btn
        v-for="(item, index) in btnLabel[e1 - 1]"
        :key="index"
        @click="setEl(item.index)"
        rounded
        color="primary"
        width="40vw"
        class="mt-5 mr-3 ml-3"
      >
        {{ item.label }}
      </v-btn>
    </v-row>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        e1: 1,
        btnLabel: [
          [
            { index: 3, label: 'ログイン' },
            { index: 2, label: '確認コードの検証' }
          ],
          [
            { index: 3, label: 'ログイン' },
            { index: 1, label: 'アカウント作成' }
          ],
          [
            { index: 1, label: 'アカウント作成' },
            { index: 2, label: '確認コードの検証' }
          ]
        ]
      }
    },
    methods: {
      setEl(input) {
        this.e1 = input
      }
    }
  }
</script>
