export default {
   namespaced: true,
   state() {
      return {
         counter: 1
      }
   },
   mutations: {
      increment(state) {
         state.counter++
      },
      add(state, payload) {
         state.counter += payload.value
      },
   },
   actions: {
      incrementAsync({commit}, payload) {
         setTimeout(() => {
            commit('add', payload)
         }, payload.delay)
      }
   },
   getters: {
      counter(state) {
         // if(state.counter > 30) {
         //    return 0
         // }
         return state.counter
      },
      doubleCounter(state, getters, rootState, rootGetters) {
         // console.log('state', state)
         // console.log('getters', getters)
         // console.log('rootS', rootState)
         // console.log('rooG', rootGetters)
         return getters.counter * 2
      }
   }
}