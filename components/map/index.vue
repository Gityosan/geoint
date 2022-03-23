<template>
  <div>
    <GmapMap
      ref="gmap"
      map-type-id="roadmap"
      :center="{
        lng: location.lng,
        lat: location.lat
      }"
      :zoom="location.zoom"
      :style="styleMap"
      :options="mapOptions"
    >
      <!-- <GmapMarker
      v-for="item in users"
      :key="item.id"
      :position="{
        lat: item.lat,
        lng: item.lng
      }"
      :title="item.name"
      :draggable="true"
      :clickable="true"
    /> -->
      <GmapMarker
        :position="{
          lat: location.lat,
          lng: location.lng
        }"
        :title="location.name"
        :draggable="false"
        :clickable="true"
        @click="location.shown = !location.shown"
      />
      <GmapInfoWindow
        :position="{
          lat: location.lat,
          lng: location.lng
        }"
        :opened="location.shown"
        @closeclick="location.shown = !location.shown"
      >
        <h3>あなたの現在位置</h3>
        <p>ステータス：{{ location.status }}</p>
        <p v-if="location.belong">所属：{{ location.belong }}</p>
      </GmapInfoWindow>
    </GmapMap>
    <MapButton />
  </div>
</template>
<script>
import { API } from 'aws-amplify'
export default {
  data: () => ({
    location: {
      lat: 35.47344346520488,
      lng: 139.5908303398634,
      zoom: 18,
      name: 'ゲスト',
      belong: '',
      status: '',
      shown: false
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
  }),
  created() {},
  mounted() {
    const google = (window.google = window.google ? window.google : {})
    const that = this
    if (this.$refs.gmap !== undefined) {
      this.$refs.gmap.$mapPromise.then((map) => {
        google.maps.event.addListener(
          this.$refs.gmap.$mapObject,
          'zoom_changed',
          function () {
            that.location.zoom = map.zoom
          }
        )
      })
    }
  },
  methods: {
    async listUsers() {
      this.users = await API.graphql({ query: '', variables: '' })
        .then((v) => {
          return v?.data?.listUsers?.items || []
        })
        .catch((e) => {
          console.log(e)
          return []
        })
      const user = this.users.filter((v) => v.owner === this.$store.state.owner)
      if (user.length) {
        this.location.name = user.name
        this.location.belong = user.belong
        this.location.status = user.status
      }
    },
    reload() {
      // 位置情報取得と共にピン情報取得
      this.getLocation()
      this.listUsers()
    },
    // 緯度経度取得
    async getLocation() {
      if (process.client) {
        if (!navigator.geolocation) {
          alert(
            '現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。'
          )
          this.$store.dispatch('resetAndGoIndex')
          return
        }
        const options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0
        }
        await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
          .then((result) => {
            this.$store.commit('setCurrentLocation', {
              search: true,
              latitude: result.coords.latitude,
              longitude: result.coords.longitude
            })
          })
          .catch((error) => {
            const errorCodeList = {
              0: '原因不明のエラーが発生しました',
              1: '位置情報の利用が許可されていません',
              2: '現在位置が取得できませんでした',
              3: 'タイムアウトになりました'
            }
            alert(errorCodeList[error.code])
            this.$store.dispatch('resetAndGoIndex')
          })
      }
    },
    initializeLocation() {
      this.location = {
        lat: 35.47344346520488,
        lng: 139.5908303398634,
        zoom: 18,
        name: 'ゲスト',
        belong: '',
        status: '',
        shown: false
      }
    }
  }
}
</script>
