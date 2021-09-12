<template>
  <v-card flat>
    <v-row v-if="$store.getters.editEvent" align="center" justify="center">
      <v-card-title class="my-2">イベント登録</v-card-title>
      <v-text-field
        class="ma-3"
        v-model.trim="event.name"
        label="イベントの名前"
        placeholder="みんなで遊びましょう！"
        required
        outlined
        rounded
        :rules="[required, max20]"
      ></v-text-field>
      <v-text-field
        class="ma-3"
        v-model.trim="event.place"
        label="集合場所"
        placeholder="どこに集合する？"
        required
        outlined
        rounded
        :rules="[required, max20]"
      ></v-text-field>
      <v-textarea
        class="ma-3"
        v-model.trim="event.discription"
        label="イベントの説明"
        placeholder="大学でお昼に集まろう！"
        required
        outlined
        rounded
        :rules="[required]"
      ></v-textarea>
      <v-card flat>
        <v-card-title>イベントの開催場所にピンを置こう！</v-card-title>
      </v-card>
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
          :title="event.place"
          :draggable="true"
          :clickable="true"
        />
      </GmapMap>
      <v-text-field
        class="ma-3"
        v-model.trim="event.name"
        label="イベントの名前"
        placeholder="みんなで遊びましょう！"
        required
        outlined
        rounded
        :rules="[required, max20]"
      ></v-text-field>
      <v-btn color="primary" width="40vw" rounded class="mt-5 mr-3 ml-3">
        登録
      </v-btn>
      <v-text-field
        class="ma-3"
        v-model.trim="event.name"
        label="イベントの名前"
        placeholder="みんなで遊びましょう！"
        required
        outlined
        rounded
        :rules="[required, max20]"
      ></v-text-field>
    </v-row>

    <v-row v-else justify="center">
      <v-card-title class="my-2">イベント一覧</v-card-title>
      <v-card v-for="(item, index) in events" :key="item.id" outlined>
        <v-col cols="5">
          <img :src="eventImageList[index]" :alt="item.image.alt" />
        </v-col>
        <v-col cols="7">
          <p>{{ item.name }}</p>
          <v-row>
            <v-col cols="5">
              <img
                :src="eventAuthorList[index].src"
                :alt="eventAuthorList[index].alt"
              />
            </v-col>
            <v-col cols="7">{{ eventAuthorList[index].username }}</v-col>
          </v-row>
          <p>{{ item.place }}</p>
        </v-col>
      </v-card>
    </v-row>
  </v-card>
</template>
<script>
  import { API, Storage } from 'aws-amplify'
  import { listEvents, getUser } from '@@/src/graphql/queries'
  export default {
    data() {
      return {
        events: null,
        eventImageList: [],
        eventAuthorList: [],
        event: {
          name: '',
          place: '',
          introduction: '',
          tag: [],
          pin: '',
          lat: 0,
          lng: 0,
          limit: 0,
          reserved: 0,
          start: null,
          end: null,
          from: null,
          to: null,
          reported: false
        },
        pinType: ['play', 'meet', 'study', 'voicechat'],
        required: (v) => !!v || '必須項目です',
        max20: (v) => (v && v.length <= 20) || '最大で20文字までです',
        max11: (v) => (v && v.length <= 11) || '最大で11文字までです',
        min8: (v) => (v && v.length < 8) || '８文字以上必要です',
        min10: (v) => (v && v.length >= 10) || '10文字以上必要です',
        fileMax5M: (v) =>
          !v ||
          v.size < 5000000 ||
          'アップロード可能なファイルサイズは５MBまでです',
        location: {
          lat: 35.658035811437166,
          lng: 139.70166202877502,
          zoom: 16
        },
        styleMap: {
          width: '90vw',
          height: '40vh'
        },
        mapOptions: {
          streetViewControl: false,
          gestureHandling: 'greedy',
          styles: []
        }
      }
    },
    async created() {
      await API.graphql({
        query: listEvents
      })
        .then(async (res) => {
          this.events = await res.data.listEvents.items
          this.eventImageList = await this.events.map(async (item) => {
            const signedUrl = await Storage.get(
              item.image.url + item.image.name,
              {
                level: 'protected',
                identityId: item.image.identityId.identityId
              }
            )
            return signedUrl
          })
          this.eventAuthorList = await new Array(this.events.length).fill({
            src: '',
            alt: '',
            username: ''
          })
          for (let i = 0; i < this.events.length; i++) {
            await API.graphql({
              query: getUser,
              variables: { userId: this.events[i].userId }
            }).then((res) => {
              const filePath =
                res.data.getUser.icon.url + res.data.getUser.icon.name
              this.eventAuthorList[i].src = Storage.get(filePath, {
                level: 'protected',
                identityId: res.data.getUser.icon.identityId
              })
              this.eventAuthorList[i].alt = res.data.getUser.icon.alt
              this.eventAuthorList[i].username = res.data.getUser.name
            })
          }
        })
        .catch((e) => console.log('API/listEvents/Error' + e))
    },
    destroyed() {
      this.$store.commit('setEditEvent', false)
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .base {
    min-height: 20vh;
  }
</style>
