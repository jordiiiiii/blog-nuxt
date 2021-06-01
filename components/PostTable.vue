<template>
  <div>
    <v-text-field v-model="search" label="Search" single-line hide-details />
    <v-data-table
      :dense="dense"
      :custom-filter="filterWord"
      :search="search"
      :items="fixedPosts"
      :headers="headers"
      show-expand
      sort-by="sortable_created_at"
      :sort-desc="true"
      :items-per-page="itemsPerPage"
      @click:row="linkPost"
    >
      <template #[`item.sortable_created_at`]="{ item }">
        <Date :date="item.createdAt" />
      </template>

      <template #[`item.read`]="{ item }">
        <div v-if="isRead(item.id)" class="success--text">
          <v-icon class="success--text" small>mdi-check</v-icon>
        </div>
        <div v-else>
          <v-btn
            v-if="$auth.loggedIn"
            text
            color="warning"
            x-small
            @click="markRead(item.id)"
          >
            Mark Read
          </v-btn>
        </div>
      </template>

      <template #[`item.tags`]="{ item }">
        <td class="non-clickable" @click.stop>
          <span v-for="tag_id in item.tag_ids" :key="tag_id">
            <v-btn
              x-small
              class="ma-1"
              :to="{ name: 'tags-id', params: { id: tag_id } }"
            >
              {{ getTag(tag_id).name }}
            </v-btn>
          </span>
        </td>
      </template>

      <template #[`item.actions`]="{ item }">
        <td class="non-clickable" @click.stop>
          <v-btn
            x-small
            class="ma-1"
            :to="{ name: 'posts-id', params: { id: item.id } }"
          >
            Read
          </v-btn>
          <v-btn
            x-small
            class="ma-1"
            :to="{ name: 'admin-posts-id-edit', params: { id: item.id } }"
          >
            Edit
          </v-btn>
          <v-btn x-small class="ma-1" @click="deletePost(item)">Delete</v-btn>
        </td>
      </template>

      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-row>
            <v-col cols="10">
              <h1>{{ item.title }}</h1>
              <p>{{ item.snippet }}</p>
            </v-col>
            <v-col cols="2">
              <v-img :src="item.imageUrl" alt="post image" />
            </v-col>
          </v-row>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    customClickAction: {
      type: Function,
      required: false,
    },
    dense: {
      type: Boolean,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return { search: '' }
  },
  computed: {
    ...mapGetters({
      isRead: 'users/postIsRead',
      getTag: 'tags/get',
    }),
    fixedPosts() {
      return this.posts.map((p) => {
        return {
          ...p,
          sortable_created_at: p.createdAt && p.createdAt.toISOString(),
        }
      })
    },
  },
  methods: {
    filterWord(value, search, item) {
      const inDescription = RegExp(search, 'i').test(item.title)

      const tagMatches = item.tag_ids.map((id) => {
        const tag = this.getTag(id)
        return RegExp(search, 'i').test(tag.name)
      })
      const inTags = _.some(tagMatches)

      return inDescription | inTags
    },
    linkPost(item) {
      if (this.customClickAction) {
        this.customClickAction(item)
      } else {
        this.$router.push({ name: 'posts-id', params: { id: item.id } })
      }
    },
    markRead(postId) {
      this.$store.dispatch('users/markReadPost', postId)
    },
    deletePost(post) {
      const response = confirm(`Are you sure you want to delete ${post.title}?`)
      if (response) {
        this.$store.dispatch('posts/delete', post)
        this.$store.dispatch('shared/setSnackbar', {
          text: 'You have successfully deleted the post.',
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
::v-deep tbody tr {
  cursor: pointer;
}
::v-deep tbody tr td.non-clickable {
  cursor: auto;
}
</style>
