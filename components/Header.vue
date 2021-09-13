<template>
  <v-app-bar class="" dense app color="white">
    <v-app-bar-title>Geoint</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      icon
      v-if="$route.name === 'event' && !$store.getters.editEvent"
      @click="$store.commit('setEditEvent', !$store.getters.editEvent)"
    >
      <v-icon>mdi-plus-box-outline</v-icon>
    </v-btn>
    <v-btn
      icon
      v-if="$route.name === 'event' && $store.getters.editEvent"
      @click="$store.commit('setEditEvent', !$store.getters.editEvent)"
    >
      <v-icon>mdi-minus-box-outline</v-icon>
    </v-btn>
    <v-btn
      icon
      v-if="$route.name === 'setting' && !$store.getters.editProfile"
      @click="$store.commit('setEditProfile', !$store.getters.editProfile)"
    >
      <v-icon>mdi-plus-box-outline</v-icon>
    </v-btn>
    <v-btn
      icon
      v-if="$route.name === 'setting' && $store.getters.editProfile"
      @click="$store.commit('setEditProfile', !$store.getters.editProfile)"
    >
      <v-icon>mdi-minus-box-outline</v-icon>
    </v-btn>

    <v-btn
      v-if="$store.getters.isSignedIn"
      icon
      @click="$store.dispatch('signOut')"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <v-btn
      v-else
      icon
      @click="
        $store.dispatch('signIn', {
          username: $store.state.username,
          password: $store.state.password
        })
      "
    >
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>
