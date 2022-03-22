<template>
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
      v-for="item in users"
      :key="item.id"
      :position="{
        lat: item.lat,
        lng: item.lng
      }"
      :title="item.name"
      :draggable="true"
      :clickable="true"
    />
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
</template>
<script>
export default {
  data: () => ({
    location: {
      lat: 35.47344346520488,
      lng: 139.5908303398634,
      zoom: 18,
      name: 'sample'
    },
    styleMap: {
      width: '100vw',
      height: 'calc(100vh - 112px)'
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
    users: []
  })
}
</script>
