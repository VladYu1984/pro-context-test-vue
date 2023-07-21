<template>
  <div class="container">
    <ul class="app-list">
      <li v-for="list in listsArr" :key="list.id">
        <AppList :list="list" />
      </li>
    </ul>
    <ul class="app-list">
      <li v-for="list in listsArr" :key="list.id">
        <AppListView :list="list" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppList from './components/AppList.vue'
import AppListView from './components/AppListView.vue'

export default {
  computed: mapGetters(['listsArr']),
  components: {
    AppList,
    AppListView
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/main.scss'
</style>
