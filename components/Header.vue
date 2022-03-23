<template>
  <v-card flat width="-webkit-fill-available" class="d-flex">
    <v-app-bar app color="white" outlined flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-title class="font-weight-bold text-h5">Geoint</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="$store.getters.isSignedIn" icon nuxt to="/user">
        <v-icon>mdi-account-edit-outline</v-icon>
      </v-btn>
      <v-btn v-else icon nuxt to="/login">
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" left temporary app>
      <v-list nav dense flat>
        <v-list-item-group v-model="group">
          <v-list-item inactive>
            <v-list-item-content>
              <v-list-item-title @click="drawer = !drawer">
                <v-icon>mdi-close</v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item inactive>
            <v-list-item-content>
              <v-list-item-title class="text-h6"> ようこそ </v-list-item-title>
              <v-list-item-subtitle>
                {{ $store.state.username || 'ゲスト' }}さん
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="item in pages"
            :key="item.label"
            muxt
            :to="item.to"
          >
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    pages: [
      { label: 'Top', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Profile', to: '/user' },
      { label: 'Logout', to: '/login' },
      { label: '', to: '' }
    ]
  }),
  methods: {}
}
</script>
