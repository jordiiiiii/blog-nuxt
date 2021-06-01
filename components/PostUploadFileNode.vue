<template>
  <div>
    <!--    &lt;!&ndash;image with vuetify and required, new post&ndash;&gt;-->
    <!--    <v-file-input-->
    <!--      id="pickedImage"-->
    <!--      ref="pickedImage"-->
    <!--      v-model="image"-->
    <!--      accept="image/png, image/jpeg, image/bmp"-->
    <!--      :rules="[imageRequired(), imageSize()]"-->
    <!--      placeholder="Pick an Image"-->
    <!--      prepend-icon="mdi-camera"-->
    <!--      label="Image"-->
    <!--      @change="onFilePicked"-->
    <!--    />-->
    <!--image with vuetify and required, edit post-->
    <v-file-input
      id="pickedImage"
      ref="pickedImage"
      v-model="image"
      accept="image/png, image/jpeg, image/bmp"
      :rules="[imageSize()]"
      placeholder="Pick an Image"
      prepend-icon="mdi-camera"
      label="Image"
      @change="onFilePicked"
    />
    <!--    &lt;!&ndash;image without required&ndash;&gt;-->
    <!--    <div class="field mt-2">-->
    <!--      <label for="pickedImage">Image</label>-->
    <!--      <v-btn class="primary mt-2" @click="onPickFile">Upload Image</v-btn>-->
    <!--      <input-->
    <!--        id="pickedImage"-->
    <!--        ref="pickedImage"-->
    <!--        type="file"-->
    <!--        style="display: none"-->
    <!--        accept="image/png image/jpg"-->
    <!--        @change="onFilePicked"-->
    <!--      />-->
    <!--    </div>-->
    <!--show image-->
    <div class="field">
      <img :src="imageUrl" alt="" height="150" />
    </div>
  </div>
</template>

<script>
import validations from '~/utils/validations'

export default {
  name: 'PostUploadFileNode',
  data() {
    return {
      image: null,
      imageUrl: '',
      ...validations,
    }
  },
  methods: {
    // onPickFile() {
    //   this.$refs.pickedImage.click()
    // },
    onFilePicked() {
      // onFilePicked(event) {
      //   const imageFile = event.target.files[0]
      const imageFile = this.image
      const fileName = imageFile.name
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(imageFile)
      this.image = imageFile
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
