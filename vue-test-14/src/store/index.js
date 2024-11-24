import {createStore, createLogger} from 'vuex'
import auth from "./modules/auth.module";

const plugins = []

if (process.env.NODE_EVN === 'development') {
   plugins.push(createLogger())
}

export default createStore({
   plugins,
   state: {},
   mutations: {},
   actions: {},
   modules: {
      auth
   }
})
