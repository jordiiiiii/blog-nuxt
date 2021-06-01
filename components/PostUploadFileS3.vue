<template>
  <!--  <input type="file" @change="uploadFile('field', $event.target.files)" />-->
  <v-file-input
    v-model="uploadObject"
    accept="image/png, image/jpeg, image/bmp, image/webp"
    placeholder="Pick an Image"
    prepend-icon="mdi-camera"
    :label="label"
    truncate-length="100"
    @change="uploadFile"
  />
</template>

<script>
import S3 from 'aws-s3'

export default {
  name: 'PostUploadFile',
  props: {
    obj: {
      type: Object,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    directory: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      uploadObject: { name: this.obj[this.field] },
    }
  },
  computed: {
    mutateObj() {
      return this.obj
    },
    s3Keys() {
      return this.$auth.user.s3_keys
    },
    config() {
      return {
        bucketName: 's3-jordi-web',
        dirName: this.directory,
        region: 'eu-west-1',
        accessKeyId: this.s3Keys.id,
        secretAccessKey: this.s3Keys.secret,
        s3Url: this.baseURL,
      }
    },
    baseURL() {
      return 'https://s3-jordi-web.s3-eu-west-1.amazonaws.com'
    },
    S3Client() {
      return new S3(this.config)
    },
    newFileName() {
      // return Math.random().toString().slice(2)
      return this.uploadObject.name
    },
    url() {
      return `${this.baseURL}/${this.directory}/${this.newFileName}`
    },
  },
  methods: {
    // vuetify upload
    async uploadFile() {
      const file = this.uploadObject

      await this.S3Client.uploadFile(file, this.newFileName).finally(() => {
        const fileExtension = file.type.split('/')[1]
        this.mutateObj[this.field] = `${this.url}.${fileExtension}`
      })

      // try {
      //   const response = await this.S3Client.uploadFile(file, this.newFileName)
      //   this.mutateObj[this.field] = response.location
      // } catch (err) {
      //   console.log(err)
      // }
    },

    // // normal upload
    // async uploadFile(field, files) {
    //   const file = files[0]
    //   try {
    //     const response = await this.S3Client.uploadFile(file, this.newFileName)
    //     console.log(response)
    //     this.mutateObj[this.field] = response.location
    //   } catch (err) {
    //     console.log(err)
    //   }
    //   // this.S3Client.uploadFile(file, this.newFileName).finally(() => {
    //   //   const fileExtension = file.type.split('/')[1]
    //   //   this.mutateObj[this.field] = `${this.url}.${fileExtension}`
    //   // })
    // },
  },
}
</script>

<style scoped></style>
