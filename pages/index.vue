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
            v-for="item in events"
            :key="item.id"
            :position="{
              lat: item.lat,
              lng: item.lng
            }"
            :title="item.name"
            :draggable="true"
            :clickable="true"
          />
          <!-- <GmapMarker
            :position="{
              lat: userInfo.lat,
              lng: userInfo.lng
            }"
            :title="userInfo.name"
            :draggable="true"
            :clickable="true"
          /> -->
          <GmapMarker
            :position="{
              lat: location.lat,
              lng: location.lng
            }"
            :title="location.name"
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
        events: [],
        userInfo: {}
      }
    },
    async created() {
      await API.graphql({
        authMode: 'AWS_IAM',
        query: listEvents
      })
        .then(async (res) => {
          this.events = await res.data.listEvents.items
        })
        .catch((e) => console.log(e))

      await API.graphql({
        query: getUser,
        authMode: 'AWS_IAM',
        variables: { id: this.$store.state.userId }
      })
        .then((res) => {
          this.userInfo = res.data.getUser
        })
        .catch((e) => console.log('getUser', e))
    }
  }
</script>
