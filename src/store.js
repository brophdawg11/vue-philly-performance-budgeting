import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORE_WARN_THRESHOLD = 10;
const STORE_ERROR_THRESHOLD = 20;

const store = new Vuex.Store({
  state: {
      foo: 'Hello World!',
      bar: 'Hello World!',
      baz: 'Hello World!',
  },
  mutations: {},
  actions: {},
});

if (process.env.NODE_ENV !== 'production') {
    const storeSize = JSON.stringify(store.state).length;
    if (storeSize > STORE_ERROR_THRESHOLD) {
        console.error(
            `[ERROR] Store size (${storeSize}) exceeds error threshold`,
            `of ${STORE_ERROR_THRESHOLD}`,
        );
    } else if (storeSize > STORE_WARN_THRESHOLD) {
        console.warn(
            `[WARN] Store size (${storeSize}) exceeds warning threshold`,
            `of ${STORE_WARN_THRESHOLD}`,
        );
    }
}

export default store;
