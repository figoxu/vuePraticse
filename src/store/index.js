import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import createLogger from '../common/plugin/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      count
    },
    plugins:[createLogger()]
  })
  