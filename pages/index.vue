<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="pa-0">
      <v-card outlined>
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
  import { API, Storage } from 'aws-amplify'
  import { listEvents, getUser } from '@@/src/graphql/queries'
  import { createEvent, createEventImage } from '@@/src/graphql/mutations'
  export default {
    middleware: 'initializeTables',
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
          width: '100vw',
          height: '100vh'
        },
        mapOptions: {
          streetViewControl: false,
          gestureHandling: 'greedy',
          fullscreenControl: false,
          mapTypeControl: false,
          // zoomControlOptions: {
          //   position: 'google.maps.ControlPosition.TOP_RIGHT'
          // },
          styles: []
        },
        events: []
      }
    }
    // async created() {
    //   await API.graphql({
    //     query: listEvents
    //   }).then(async (res) => {
    //     this.events = await res.data.listEvents.items
    //   })
    // }
  }
</script>
