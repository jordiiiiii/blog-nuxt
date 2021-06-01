<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="mutatePost.title"
      label="Title"
      counter="88"
      :rules="[
        required('Title'),
        minLength('Title', 20),
        maxLength('Title', 88),
      ]"
    />

    <v-row>
      <v-col cols="12" sm="8">
        <PostUploadFileS3
          :obj="mutatePost"
          field="imageUrl"
          directory="images"
          label="Image Name"
        />

        <v-text-field
          v-model="mutatePost.imageUrl"
          label="Image Url"
          disabled
        />
        <!--        :rules="[required('ImageUrl')]"-->
      </v-col>
      <v-col cols="12" sm="4">
        <v-img :src="mutatePost.imageUrl" alt="post image" />
      </v-col>
    </v-row>

    <v-textarea
      v-model="mutatePost.snippet"
      label="Snippet"
      counter="180"
      :rules="[
        required('Snippet'),
        minLength('Snippet', 100),
        maxLength('Snippet', 180),
      ]"
    />

    <MarkdownEditor :markdown="mutatePost.body">
      <template #default>
        <v-textarea
          v-model="mutatePost.body"
          label="Body"
          rows="24"
          counter="6000"
          :rules="[
            required('Body'),
            minLength('Body', 2000),
            maxLength('Body', 6000),
          ]"
        />
      </template>
      <template #footer>
        Please write some thoughts into the <strong>body</strong>
      </template>
    </MarkdownEditor>

    <v-btn :disabled="!valid" @click="mutateSave">{{ btn }} Post</v-btn>
  </v-form>
</template>

<script>
import _ from 'lodash'
import validations from '~/utils/validations'

export default {
  name: 'PostEditForm',
  props: {
    post: {
      type: Object,
      required: true,
    },
    save: {
      type: Function,
      required: true,
    },
    btn: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      valid: false,
      ...validations,
      mutatePost: _.cloneDeep(this.post),
    }
  },
  // computed: {
  // mutatePost() {
  //   return this.post
  // },
  // mutateSave() {
  //   return this.save
  // },
  // mutateBtn() {
  //   return this.btn
  // },
  // },
  methods: {
    mutateSave() {
      this.save(this.mutatePost)
    },
  },
}
</script>

<style lang="scss" scoped>
.field {
  input {
    border: 1px solid black;
  }
  label {
    display: block;
  }
  padding-bottom: 10px;
}
</style>
