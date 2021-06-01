import Vue from 'vue'
import { getData, deserializePosts } from '~/utils/store-utils'

export const state = () => ({
  posts: [],
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  ADD_POST(state, savedPost) {
    state.posts.push(savedPost)
  },
  UPDATE_POST(state, newPost) {
    const postIndex = state.posts.findIndex((p) => p.id === newPost.id)

    Vue.set(state.posts, postIndex, newPost)
  },
  DELETE_POST(state, postId) {
    state.posts = state.posts.filter((p) => p.id !== postId)
  },
}

export const actions = {
  async loadAll({ commit }) {
    const { data: posts } = await getData('/posts', this.$axios)
    deserializePosts(posts)

    commit(
      'SET_POSTS',
      posts.map((p) => p.attributes)
    )
  },
  // image goes to aws s3
  async createNoImageNode({ commit }, postPayload) {
    try {
      const response = await this.$axios.post('/posts', postPayload)
      const savedPost = response.data.data.attributes
      savedPost.tag_ids = []
      if (savedPost.createdAt) {
        savedPost.createdAt = new Date(savedPost.createdAt)
      }
      commit('ADD_POST', savedPost)
      return savedPost
    } catch (err) {
      return { err }
    }
  },
  // // image goes to node and heroku
  // async create({ commit }, { postPayload, imagePayload }) {
  //   try {
  //     const formData = new FormData()
  //     formData.append('title', postPayload.title)
  //     formData.append('snippet', postPayload.snippet)
  //     formData.append('body', postPayload.body)
  //     formData.append('creator', postPayload.creator)
  //     formData.append('imageUrl', imagePayload, imagePayload.name)
  //     const response = await this.$axios.post('/posts', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     const savedPost = response.data.data.attributes
  //     savedPost.tag_ids = []
  //     commit('ADD_POST', savedPost)
  //     return savedPost
  //   } catch (err) {
  //     return { err }
  //   }
  // },
  // image goes to aws s3
  async updateNoImageNode({ commit }, postPayload) {
    try {
      const response = await this.$axios.patch(
        `/posts/${postPayload.id}`,
        postPayload
      )
      const newPost = response.data.data
      deserializePosts([newPost])
      commit('UPDATE_POST', newPost.attributes)
      return newPost.attributes
    } catch (err) {
      return { err }
    }
  },
  // // image goes to node and heroku
  // async update({ commit }, { postPayload, imagePayload }) {
  //   try {
  //     const formData = new FormData()
  //     formData.append('snippet', postPayload.snippet)
  //     formData.append('title', postPayload.title)
  //     formData.append('body', postPayload.body)
  //     if (imagePayload) {
  //       formData.append('imageUrl', imagePayload, imagePayload.name)
  //     }
  //     const response = await this.$axios.patch(
  //       `/posts/${postPayload.id}`,
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     )
  //     const newPost = response.data.data.attributes
  //     commit('UPDATE_POST', newPost)
  //     return newPost
  //   } catch (err) {
  //     return { err }
  //   }
  // },
  async delete({ commit }, post) {
    const response = await this.$axios.delete(`/posts/${post.id}`)
    if (response.status >= 200 && response.status <= 299) {
      commit('DELETE_POST', post.id)
    }
  },
  // async delete({ commit }, post) {
  //   try {
  //     const response = await this.$axios.delete(`/posts/${post.id}`)
  //
  //     if (response.status >= 200 && response.status <= 299) {
  //       commit('DELETE_POST', post.id)
  //     }
  //   } catch (err) {
  //     return { err }
  //   }
  // },
}

export const getters = {
  get: (state) => (id) => {
    return state.posts.find((p) => p.id === id) || {}
  },
}
