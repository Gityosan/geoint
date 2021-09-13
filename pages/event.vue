<template>
  <v-card flat>
    <v-row v-if="$store.getters.editEvent" align="center" justify="center">
      <v-card-title class="my-2 mx-10">イベント登録</v-card-title>
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
      <v-select
        :items="eventLimitList"
        label="募集人数"
        class="ma-3"
        required
        v-model="event.limit"
        outlined
        rounded
      ></v-select>
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
        ref="gmap"
        map-type-id="roadmap"
        :center="{
          lng: event.lng,
          lat: event.lat
        }"
        :zoom="event.zoom"
        :style="styleMap"
        :options="mapOptions"
      >
        <GmapMarker
          :position="{
            lat: event.lat,
            lng: event.lng
          }"
          :title="event.place"
          :draggable="true"
          :clickable="true"
          @dragend="updateMarker"
        />
      </GmapMap>

      <v-card-subtitle class="mx-10">開始時刻は？</v-card-subtitle>
      <v-menu
        ref="menu"
        v-model="eventStart.date"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventStart.dateValue"
            label="日付を選択"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="eventStart.dateValue"
          no-title
          @input="eventStart.date = false"
          scrollable
        >
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="menu"
        v-model="eventStart.time"
        :close-on-content-click="false"
        :return-value.sync="eventStart.time"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventStart.timeValue"
            label="時刻を選択"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-time-picker
          v-model="eventStart.timeValue"
          no-title
          @input="eventStart.time = false"
          scrollable
        >
        </v-time-picker>
      </v-menu>

      <v-card-subtitle class="mx-10">終了時刻は？</v-card-subtitle>
      <v-menu
        ref="menu"
        v-model="eventEnd.date"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventEnd.dateValue"
            label="日付を選択"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="eventEnd.dateValue"
          no-title
          @input="eventEnd.date = false"
          scrollable
        >
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="menu"
        v-model="eventEnd.time"
        :close-on-content-click="false"
        :return-value.sync="eventEnd.time"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventEnd.timeValue"
            label="時刻を選択"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-time-picker
          v-model="eventEnd.timeValue"
          no-title
          @input="eventEnd.time = false"
          scrollable
        >
        </v-time-picker>
      </v-menu>

      <v-card-subtitle class="mx-10">いつから載せる？</v-card-subtitle>
      <v-menu
        ref="menu"
        v-model="eventFrom.date"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventFrom.dateValue"
            label="日付を選択"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="eventFrom.dateValue"
          no-title
          @input="eventFrom.date = false"
          scrollable
        >
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="menu"
        v-model="eventFrom.time"
        :close-on-content-click="false"
        :return-value.sync="eventFrom.time"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventFrom.timeValue"
            label="時刻を選択"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-time-picker
          v-model="eventFrom.timeValue"
          no-title
          @input="eventFrom.time = false"
          scrollable
        >
        </v-time-picker>
      </v-menu>

      <v-card-subtitle class="mx-10">いつまで載せる？</v-card-subtitle>
      <v-menu
        ref="menu"
        v-model="eventTo.date"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventTo.dateValue"
            label="日付を選択"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="eventTo.dateValue"
          no-title
          @input="eventTo.date = false"
          scrollable
        >
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="menu"
        v-model="eventTo.time"
        :close-on-content-click="false"
        :return-value.sync="eventTo.time"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="eventTo.timeValue"
            label="時刻を選択"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
            rounded
            class="mx-10"
          ></v-text-field>
        </template>
        <v-time-picker
          v-model="eventTo.timeValue"
          no-title
          @input="eventTo.time = false"
          scrollable
        >
        </v-time-picker>
      </v-menu>
      {{ eventTo.dateValue }}
      {{ eventTo.timeValue }}
      {{ eventTo.dateValue + eventTo.timeValue }}

      <v-card-subtitle class="mx-10">サムネイル</v-card-subtitle>
      <template v-if="eventImage.uploadImageUrl">
        <v-img
          :src="eventImage.uploadImageUrl"
          width="80%"
          class="my-5 mx-10"
        />
      </template>
      <template v-else>
        <v-img src="/img/no_image.png" width="80%" class="mx-10 my-5" />
      </template>
      <v-col cols="11">
        <v-file-input
          v-model="eventImage.inputImage"
          accept="image/*"
          show-size
          :label="eventImage.name || '画像をアップロード'"
          prepend-icon="mdi-image"
          @change="onImagePicked"
          outlined
          :rules="[required, fileMax5M]"
          full-width
        ></v-file-input>
      </v-col>
      <v-btn
        color="primary"
        width="40vw"
        rounded
        @click="createEvent"
        :disabled="btnDisable"
      >
        登録
      </v-btn>
      <v-card flat height="30vh"></v-card>
    </v-row>

    <v-row v-else align="center" justify="center">
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
  import { createEvent, createEventImage } from '@@/src/graphql/mutations'
  export default {
    data() {
      return {
        events: null,
        eventImageList: [],
        eventAuthorList: [],
        eventLimitList: [],
        eventStart: { date: false, time: false, dateValue: '', timeValue: '' },
        eventEnd: { date: false, time: false, dateValue: '', timeValue: '' },
        eventFrom: { date: false, time: false, dateValue: '', timeValue: '' },
        eventTo: { date: false, time: false, dateValue: '', timeValue: '' },
        event: {
          name: '',
          place: '',
          introduction: '',
          lat: 35.658035811437166,
          lng: 139.70166202877502,
          zoom: 16,
          limit: 0,
          reserved: 0,
          start: null,
          end: null,
          from: null,
          to: null,
          reported: false
        },
        eventImage: {
          name: '',
          type: '',
          size: '',
          alt: '',
          url: '',
          identityId: '',
          inputImage: null,
          uploadImageUrl: ''
        },
        btnDisable: false,
        required: (v) => !!v || '必須項目です',
        max20: (v) => (v && v.length <= 20) || '最大で20文字までです',
        fileMax5M: (v) =>
          !v ||
          v.size < 5000000 ||
          'アップロード可能なファイルサイズは５MBまでです',
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
      this.eventLimitList = [...Array(30)].map((_, i) => i + 1)
      await API.graphql({
        authMode: 'AWS_IAM',
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
              authMode: 'AWS_IAM',
              variables: { id: this.events[i].userId }
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
    methods: {
      onImagePicked(file) {
        if (file !== undefined && file !== null) {
          if (file.name.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(file)
          fr.addEventListener('load', () => {
            this.eventImage.uploadImageUrl = fr.result
            this.eventImage.size = file.size
            this.eventImage.type = file.type
            this.eventImage.name = file.name
            // inputImageに自動でファイルオブジェクトが入る
          })
        } else {
          this.eventImage.inputImage = null
          this.eventImage.uploadImageUrl = ''
        }
      },
      async createEvent() {
        this.btnDisable = await true
        await API.graphql({
          query: createEventImage,
          authMode: 'AWS_IAM',
          variables: {
            input: {
              alt: this.event.name,
              name: this.eventImage.name,
              size: this.eventImage.size,
              type: this.eventImage.type,
              url: '/event/',
              identityId: this.$store.state.identityId,
              owner: this.$store.state.owner
            }
          }
        })
          .then(async (res) => {
            await API.graphql({
              query: createEvent,
              authMode: 'AWS_IAM',
              variables: {
                input: {
                  name: this.event.name,
                  introduction: this.event.introduction,
                  limit: this.event.limit,
                  reserved: 0,
                  lat: this.event.lat,
                  lng: this.event.lng,
                  start:
                    this.eventStart.dateValue +
                    'T' +
                    this.eventStart.timeValue +
                    'Z',
                  end:
                    this.eventEnd.dateValue +
                    'T' +
                    this.eventEnd.timeValue +
                    'Z',
                  from:
                    this.eventFrom.dateValue +
                    'T' +
                    this.eventFrom.timeValue +
                    'Z',
                  to:
                    this.eventTo.dateValue + 'T' + this.eventTo.timeValue + 'Z',
                  userId: this.$store.state.userId,
                  owner: this.$store.state.owner,
                  eventImageId: res.data.createEventImage.eventImageId,
                  reported: false
                }
              }
            })
              .then(() => {
                this.btnDisable = false
                this.$store.commit('setEditEvent', false)
              })
              .catch((e) => console.log('createEvent', e))
          })
          .catch((e) => console.log('createEventImage', e))
      },
      // GoogleMapのマーカーがドラッグで移動された時の座標更新
      updateMarker(location) {
        this.event.lng = location.latLng.lng()
        this.event.lat = location.latLng.lat()
      }
    }
    // async mounted(){
    //   let that = this
    //   if (this.$refs.gmap !== undefined) {
    //     this.$refs.gmap.$mapPromise
    //       .then((map) => {
    //         google.maps.event.addListener(
    //           this.$refs.gmap.$mapObject,
    //           'zoom_changed',
    //           function () {
    //             that.event.zoom = map.zoom
    //           }
    //         )
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }
    // }
  }
</script>
