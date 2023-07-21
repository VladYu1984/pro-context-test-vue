import { createStore } from 'vuex'
import shortid from 'shortid'

export default createStore({
  state: {
    lists: [
      {
        id: shortid.generate(),
        title: 'List 1',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 10,
            color: '#ff0000',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 16,
            color: '#ffff00',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 40,
            color: '#40cf40',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 0,
            color: '#4069cf',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 2',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 12,
            color: '#a440cf',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 10,
            color: '#f72525',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 7,
            color: '#40cfb5',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 8,
            color: '#f79c25',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 5',
            quantity: 22,
            color: '#000',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 3',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 6,
            color: '#d48c97',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 19,
            color: '#8cd4c4',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 9,
            color: '#f75d25',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 4',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 11,
            color: '#fc3d93',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 2,
            color: '#640c8a',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 6,
            color: '#4f5e78',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 17,
            color: '#bbc489',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 5',
            quantity: 31,
            color: '#8ec489',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 6',
            quantity: 5,
            color: '#2cf594',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 7',
            quantity: 18,
            color: '#2c5bf5',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 8',
            quantity: 13,
            color: '#f5f22c',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 5',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 9,
            color: '#000',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 1,
            color: '#f52c5b',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 13,
            color: '#320f3b',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 7,
            color: '#66432c',
            active: false
          }
        ]
      }
    ]
  },
  getters: {
    listsArr (state) {
      return state.lists
    }
  },
  mutations: {
    changeParams (state, { listIdx, itemIdx, quantity, color, active }) {
      const item = state.lists[listIdx].items[itemIdx]
      const list = state.lists[listIdx]
      item.quantity = quantity
      item.color = color
      item.active = active

      list.active = list.items.every(({ active }) => active)
    },

    toggleListActive (state, { active, list }) {
      const listIdx = state.lists.indexOf(list)
      state.lists[listIdx].active = active

      state.lists[listIdx].items.forEach((item) => (item.active = active))
    },

    reduceQuantity (state, { listIdx, itemIdx }) {
      const item = state.lists[listIdx].items[itemIdx]
      item.quantity--
    }
  },
  actions: {},
  modules: {}
})
