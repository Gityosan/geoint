import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'vuex-persistedstate-dental-clinic-search'
  })(store)
}
