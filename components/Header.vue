<template>
  <v-app-bar class="" dense app hide-on-scroll>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>Geoint</v-app-bar-title>
    <v-spacer></v-spacer>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-if="$route.name === 'event'" v-bind="attrs" v-on="on">
        <v-icon>mdi-plus-box-outline</v-icon>
      </v-btn>
    </template>
    <!-- <template>
      <v-btn icon v-if="$route.name === 'event'" v-bind="attrs" v-on="on">
        <v-icon>mdi-plus-box-outline</v-icon>
      </v-btn>
    </template> -->

    <v-btn icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>
