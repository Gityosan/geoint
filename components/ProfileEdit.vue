<template>
  <v-card flat>
    <v-row align="center" justify="center">
      <v-card-title class="my-2 mx-10">プロフィール編集</v-card-title>
      <v-text-field
        v-model.trim="userData.name"
        class="ma-3"
        label="お名前"
        :placeholder="userInfo.name || ''"
        required
        outlined
        rounded
        :rules="[required, max20]"
      ></v-text-field>
      <v-select
        v-model="userData.status"
        :items="userStatus"
        label="マップですれ違うかの設定"
        class="ma-3"
        required
        outlined
        rounded
      ></v-select>
      <v-textarea
        v-model.trim="userData.introduction"
        class="ma-3"
        label="自己紹介"
        :placeholder="userInfo.introduction || ''"
        required
        outlined
        rounded
        :rules="[required]"
      ></v-textarea>

      <v-card-subtitle class="mx-10">アイコン画像</v-card-subtitle>
      <template v-if="userImage.uploadImageUrl">
        <v-img :src="userImage.uploadImageUrl" width="80%" class="my-5 mx-10" />
      </template>
      <template v-else>
        <v-img src="/img/no_image.png" width="80%" class="mx-10 my-5" />
      </template>
      <v-col cols="11">
        <v-file-input
          v-model="userImage.inputImage"
          accept="image/*"
          show-size
          :label="userImage.name || '画像をアップロード'"
          prepend-icon="mdi-image"
          outlined
          :rules="[required, fileMax5M]"
          full-width
          @change="onImagePicked"
        ></v-file-input>
      </v-col>
      <v-btn
        color="primary"
        width="40vw"
        rounded
        :disabled="btnDisable"
        @click="createEvent"
      >
        更新
      </v-btn>
      <v-card flat height="30vh"></v-card>
    </v-row>
  </v-card>
</template>
<script>
import { API, Storage } from 'aws-amplify'
// import { updateUser, updateUserImage } from '@@/src/graphql/mutations'
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      userData: {
        name: '',
        introduction: '',
        lat: '',
        lng: '',
        acquaintance: [],
        status: ''
      },
      userImage: {
        name: '',
        type: '',
        size: '',
        alt: '',
        url: '',
        identityId: '',
        inputImage: null,
        uploadImageUrl: ''
      },
      userStatus: ['everyone', 'welcome', 'reject'],
      btnDisable: false
    }
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
          this.userImage.uploadImageUrl = fr.result
          this.userImage.size = file.size
          this.userImage.type = file.type
          this.userImage.name = file.name
          // inputImageに自動でファイルオブジェクトが入る
        })
      } else {
        this.userImage.inputImage = null
        this.userImage.uploadImageUrl = ''
      }
    },
    async updateUser() {
      // this.btnDisable = await true
      // await API.graphql({
      //   query: updateUser,
      //   variables: {
      //     input: {
      //       name: this.userInfo.name,
      //       introduction: this.userInfo.introduction,
      //       status: this.userInfo.status
      //     }
      //   }
      // }).catch((e) => console.log('updateUser', e))
      // await API.graphql({
      //   query: updateUserImage,
      //   variables: {
      //     input: {
      //       alt: this.userInfo.name,
      //       name: this.userImage.name,
      //       size: this.userImage.size,
      //       type: this.userImage.type,
      //       url: '/user/'
      //     }
      //   }
      // }).catch((e) => console.log('updateUserImage', e))
      // this.btnDisable = await false
      // await this.$store.commit('setEditProfile', false)
    }
  }
}
</script>
