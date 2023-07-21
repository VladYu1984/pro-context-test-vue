<template>
  <div class="view-list">
    <div class="view-list__header">
      <h3 class="view-list__title">{{ list.title }}</h3>
      <button class="view-list__btn" @click="onShuffle">
        {{ !isSort && list.active ? 'Сортировать' : 'Перемешать' }}
      </button>
    </div>
    <ul v-if="isSort" class="view-list__sort">
      <li v-for="item in list.items" :key="item.id">
        <app-sort-item
          :items="list.items"
          :item="item"
          :listIdx="listIdx"
        ></app-sort-item>
      </li>
    </ul>
    <ul v-else class="view-list__shuffle shuffle-list">
      <li
        class="shuffle-list__item"
        :style="`background-color: ${item.color}`"
        v-for="(item, idx) in shuffleItems"
        :key="idx"
        @click="() => onRemove(item.idx)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppSortItem from './AppSortItem.vue'
export default {
  props: {
    list: Object,
  },
  data() {
    return {
      isSort: true,
    }
  },

  computed: {
    ...mapGetters(['listsArr']),
    listIdx() {
      return this.listsArr.findIndex((list) => list.id === this.list.id)
    },
    shuffleItems() {
      let shuffle = []

      this.list.items.forEach((item) => {
        if (item.active) {
          shuffle.push(item)
        }
      })

      shuffle = shuffle.map((item) => {
        const itemsArr = []
        let i = 0
        while (i < item.quantity) {
          const idx = this.list.items.indexOf(item)
          itemsArr.push({
            color: item.color,
            idx: idx,
          })
          i++
        }
        return itemsArr
      })
      shuffle = shuffle.reduce((prev, next) => prev.concat(next), [])

      shuffle.sort(() => Math.random() - 0.5)
      return shuffle
    },
  },
  methods: {
    onShuffle() {
      this.isSort = !this.isSort
    },
    onRemove(itemIdx) {
      this.$store.commit('reduceQuantity', {
        listIdx: this.listIdx,
        itemIdx: itemIdx,
      })
      this.shuffleArr = this.shuffleItems
    },
  },
  components: {
    AppSortItem,
  },
}
</script>

<style lang="scss" scoped>
.view-list {
  padding: 10px;
  border: solid 2px #000;
  // .view-list__header

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    font-weight: 400;
    font-size: 18px;
  }

  &__btn {
    width: 120px;
    padding: 10px;
    color: #fff;
    background-color: rgb(0, 116, 233);
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgb(0, 95, 191);
    }
  }

  &__sort {
    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__shuffle {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
}

.shuffle-list {
  &__item {
    width: 20px;
    height: 20px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>