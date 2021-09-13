<template>
  <v-card flat>
    <v-row align="center" justify="center">
      <v-card-title class="my-2">知り合った人一覧</v-card-title>
      <v-card
        v-for="item in acquaintance"
        :key="item.id"
        outlined
        class="mx-5 my-2"
      >
        <v-col cols="5">
          <img :src="getImage(item.icon)" :alt="item.icon.alt" />
        </v-col>
        <v-col cols="7">
          <p>{{ item.name }}</p>
          <p>知り合い：{{ item.acquaintance.length }}人</p>
          <p>状態：{{ item.status }}</p>
        </v-col>
      </v-card>
    </v-row>
  </v-card>
</template>
<script>
  import { API, Storage } from 'aws-amplify'
  import { listUsers, getUser } from '@@/src/graphql/queries'
  export default {
    data() {
      return {
        acquaintance: []
      }
    },
    async created() {
      await API.graphql({
        query: getUser,
        variables: { userId: this.$store.state.userId }
      })
        .then((res) => {
          res.data.getUser.acquaintance.map(async (item) => {
            await API.graphql({
              query: listUsers,
              variables: {
                input: {
                  or: this.makeUserIdFilter(item)
                }
              }
            }).then((res) => {
              this.acquaintance = res.data.listUsers.items
            })
          })
        })
        .catch((e) => console.log('getUser', e))
    },
    methods: {
      makeUserIdFilter(v) {
        return v.map((i) => {
          return { userId: { eq: i } }
        })
      },
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
