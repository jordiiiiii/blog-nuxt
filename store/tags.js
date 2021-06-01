import Vue from 'vue'
import { getData, deserializeTags } from '~/utils/store-utils'

export const state = () => ({
  tags: [],
})

export const mutations = {
  SET_TAGS(state, tags) {
    state.tags = tags
  },
  ADD_TAG(state, { tag }) {
    state.tags = state.tags.concat(tag)
  },
  UPDATE_TAG_NAME(state, { tag }) {
    const tagIndex = state.tags.findIndex((t) => t.id === tag.id)
    Vue.set(state.tags, tagIndex, tag)
  },
  DELETE_TAG(state, { tag }) {
    state.tags = state.tags.filter((t) => t.id !== tag.id)
  },
  ADD_TAG_FROM_POST(state, { post, tag }) {
    post.tag_ids = post.tag_ids.concat(tag.id)
    tag.post_ids = tag.post_ids.concat(post.id)
  },
  REMOVE_TAG_FROM_POST(state, { post, tag }) {
    post.tag_ids = post.tag_ids.filter((tId) => tId !== tag.id)
    tag.post_ids = tag.post_ids.filter((pId) => pId !== post.id)
  },
}

export const actions = {
  async loadAll({ commit }) {
    const { data: tags } = await getData('/tags', this.$axios)
    deserializeTags(tags)
    commit(
      'SET_TAGS',
      tags.map((t) => t.attributes)
    )
  },
  async create({ commit }, tag) {
    try {
      const response = await this.$axios.post('/tags', tag)
      const newTag = response.data.data.attributes
      newTag.id = response.data.data.id
      newTag.post_ids = []
      commit('ADD_TAG', { tag: newTag })
      return newTag
    } catch (err) {
      console.log(err.response.data.error)
    }
  },
  async updateTagName({ commit }, { tag }) {
    try {
      await this.$axios.patch(`/tags/${tag.id}`, {
        name: tag.name,
      })
      commit('UPDATE_TAG_NAME', { tag })
    } catch (err) {
      console.log(err.response.data.error)
    }
  },
  async delete({ commit }, { tag }) {
    try {
      await this.$axios.delete(`/tags/${tag.id}`)
      commit('DELETE_TAG', { tag })
    } catch (err) {
      console.log(err.response.data.error)
    }
  },
  async addTagFromPost({ commit }, { post, tag }) {
    try {
      await this.$axios.patch(`/posts/addTags/${post.id}`, {
        tag: tag.id,
      })
      commit('ADD_TAG_FROM_POST', { post, tag })
    } catch (err) {
      console.log(err.response.data.error)
    }
  },
  async removeTagFromPost({ commit }, { post, tag }) {
    try {
      await this.$axios.patch(`/posts/removeTags/${post.id}`, {
        tag: tag.id,
      })
      commit('REMOVE_TAG_FROM_POST', { post, tag })
    } catch (err) {
      console.log(err.response.data.error)
    }
  },
}

export const getters = {
  get: (state) => (id) => {
    return state.tags.find((t) => t.id === id)
  },
}
