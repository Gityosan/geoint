<template>
  <v-card flat>
    <v-card class="mx-0 pa-0" color="transparent" flat width="100%">
      <v-card-title class="font-weight-bold text-h5">
        Geoint
        <br />
        ログインページ
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card>
    <LazyAuthSignUp />
    <LazyAuthSignIn />
  </v-card>
</template>
<script>
export default {
  data: () => ({}),
  head: {
    title: 'ログイン'
  },
  mounted() {
    this.$store.commit('setIsSignedIn', false)
  },
  methods: {}
}
</script>
