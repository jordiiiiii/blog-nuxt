export const state = () => ({
  users: [],
})

export const mutations = {
  MARK_POST_READ(state, { postId, user }) {
    user.readPostIds = user.readPostIds.concat(postId)
  },
}

export const actions = {
  async registerUser({ commit }, { userName, email, password }) {
    try {
      const response = await this.$axios.post('signup', {
        userName,
        email,
        password,
      })
      return response.data.data.attributes
    } catch (err) {
      let error = err.response.data.errors
      error = error.email
        ? error.email
        : error.password
        ? error.password
        : error.userName
      commit('shared/SET_ERROR', error, { root: true })
      return { error }
    }
  },
  // markReadPost({ commit, rootState }, postId) {
  //   if (rootState.auth.loggedIn) {
  //     commit('MARK_POST_READ', { postId, user: rootState.auth.user })
  //     this.$axios.patch(`users/addReadPost/${rootState.auth.user.id}`, {
  //       readPostIds: postId,
  //     })
  //   }
  // },
  async markReadPost({ commit, rootState }, postId) {
    if (rootState.auth.loggedIn) {
      try {
        await this.$axios.patch(`users/addReadPost/${rootState.auth.user.id}`, {
          readPostIds: postId,
        })
        commit('MARK_POST_READ', { postId, user: rootState.auth.user })
      } catch (err) {
        // console.log(err.response.data.error)
      }
    }
  },
}

export const getters = {
  readPosts: (state, getters, rootState, rootGetters) => {
    if (rootState.auth.loggedIn) {
      return rootState.auth.user.readPostIds
    } else {
      return []
    }
  },
  postIsRead: (state, getters) => (postId) => {
    return getters.readPosts.includes(postId)
  },
}
