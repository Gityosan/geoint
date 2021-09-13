<template>
  <v-card flat>
    <profile-edit
      v-if="$store.getters.editProfile"
      :userInfo="userInfo"
    ></profile-edit>
    <v-row v-else align="center" justify="center">
      <v-row>
        <v-col cols="4">
          <img :src="userIcon" alt="アイコン" />
        </v-col>
        <v-col cols="8">
          <!-- <p>{{ userInfo.name || 'サンプルネーム' }}</p> -->
          <p>サンプルネーム</p>
          <p>
            知り合った人数：{{
              userInfo.acquaintance ? userInfo.acquaintance.length : 0
            }}人
          </p>
        </v-col>
      </v-row>
      <p>{{ userInfo.introduction }}</p>
    </v-row>
  </v-card>
</template>
<script>
  import { API, Storage } from 'aws-amplify'
  import { getUser } from '@@/src/graphql/queries'
  export default {
    data() {
      return {
        userInfo: {
          name: 'サンプル'
        },
        userIcon: ''
      }
    },
    async created() {
      await API.graphql({
        query: getUser,
        variables: { id: this.$store.state.userId }
      })
        .then(async (res) => {
          this.userInfo = res.data.getUser
          await Storage.get(
            res.data.getUser.icon.url + res.data.getUser.icon.name,
            {
              level: 'protected',
              identityId: this.$store.state.identityId
            }
          )
            .then((res) => {
              this.userIcon = res
            })
            .catch((e) => console.log('StorageGet', e))
        })
        .catch((e) => console.log('getUser', e))
    },
    methods: {
      async getImage(item) {
        const signedUrl = await Storage.get(item.url + item.name, {
          level: 'protected',
          identityId: this.$store.state.identityId
        })
        return signedUrl
      }
    }
  }
</script>
