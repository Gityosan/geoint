<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card outlined class="base">
        <GmapMap
          map-type-id="roadmap"
          :center="{
            lng: location.lng,
            lat: location.lat
          }"
          :zoom="location.zoom"
          :style="styleMap"
          :options="mapOptions"
        >
          <GmapMarker
            :position="{
              lat: location.lat,
              lng: location.lng
            }"
            :title="name"
            :draggable="true"
            :clickable="true"
          />
        </GmapMap>
      </v-card>
      <v-card> </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    props: {
      Info: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        name: '',
        location: {
          lat: 35.658035811437166,
          lng: 139.70166202877502,
          zoom: 16
        },
        styleMap: {
          width: '100%',
          height: '600px'
        },
        mapOptions: {
          streetViewControl: false,
          gestureHandling: 'greedy',
          styles: []
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .base {
    min-height: 80vh;
  }
</style>
