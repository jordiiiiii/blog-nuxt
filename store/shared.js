export const state = () => ({
  error: null,
  snackbars: [],
})

export const mutations = {
  SET_ERROR(state, payload) {
    state.error = payload
  },
  CLEAR_ERROR(state) {
    state.error = null
  },
  SET_SNACKBAR(state, snackbar) {
    state.snackbars = state.snackbars.concat(snackbar)
  },
  CLOSE_SNACKBAR(state, snackbar) {
    snackbar.showing = false
  },
}

export const actions = {
  clearError({ commit }) {
    commit('CLEAR_ERROR')
  },
  setSnackbar({ commit }, snackbar) {
    snackbar.showing = true
    snackbar.timeout = -1
    // snackbar.timeout = 4000;
    snackbar.color = snackbar.color || 'success lighten-1'
    commit('SET_SNACKBAR', snackbar)
  },
  closeSnackbar({ commit }, snackbar) {
    commit('CLOSE_SNACKBAR', snackbar)
  },
}

export const getters = {
  error: (state) => {
    return state.error
  },
  // error(state) {
  //   return state.error;
  // }
}
