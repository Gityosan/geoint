<template>
  <v-bottom-navigation
    width="96vw"
    class="ma-auto rounded-xl"
    grow
    shift
    fixed
    color="primary"
  >
    <v-btn to="/"><span>Map</span><v-icon>mdi-map-legend</v-icon></v-btn>
    <v-btn to="/event/">
      <span>Event</span><v-icon>mdi-calendar-search</v-icon>
    </v-btn>
    <v-btn to="/users/">
      <span>Users</span><v-icon>mdi-account-group-outline</v-icon>
    </v-btn>
    <v-btn to="/setting/">
      <span>Setting</span><v-icon>mdi-cog-outline </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
