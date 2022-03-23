<template>
  <v-card flat>
    <v-tabs v-model="tabs" grow>
      <v-tab>Map</v-tab>
      <v-tab>Contact</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <Map />
      </v-tab-item>
      <v-tab-item>
        <Contact />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    tabs: null
  })
}
</script>
