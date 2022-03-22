<template>
  <v-app>
    <v-main>
      <Header />
      <v-container class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Hub, Auth } from 'aws-amplify'
export default {
  async created() {
    // if (
    //   this.$store.state.isSignedIn === false &&
    //   this.$route.path !== '/login'
    // ) {
    //   await Auth.currentUserInfo()
    //     .then((data) => this.$store.commit('setIsSignedIn', Boolean(data)))
    //     .then(() => this.$store.state.isSignedIn || this.$router.push('/login'))
    // }
    // Hub.listen('auth', this.listener)
  },

  destroyed() {
    Hub.remove('auth', this.listener)
  },
  methods: {
    listener(data) {
      if (data.payload.event === 'signOut') {
        this.$store.commit('setIsSignedIn', false)
        this.$router.push('/login')
      }
      if (data.payload.event === 'signIn') {
        this.$store.commit('setIsSignedIn', true)
        this.$router.push('/')
      }
    }
  }
}
</script>
