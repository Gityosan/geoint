<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <MenuBar />
  </v-app>
</template>

<script>
  import { Hub, Auth } from 'aws-amplify'
  export default {
    data() {
      return {}
    },
    async created() {
      if (
        this.$store.state.isSignedIn === false &&
        this.$route.path !== '/login'
      ) {
        await Auth.currentUserInfo()
          .then((data) => this.$store.commit('setIsSignedIn', Boolean(data)))
          .then(
            () => this.$store.state.isSignedIn || this.$router.push('/login')
          )
      }
      Hub.listen('auth', this.listener)
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
