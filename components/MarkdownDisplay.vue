<template>
  <div v-html="processedMarkdown"></div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/solarized-dark.css'

export default {
  props: {
    markdown: {
      type: String,
      default: '',
    },
  },
  computed: {
    mutateMarkdown() {
      return this.markdown
    },
    processedMarkdown() {
      if (this.mutateMarkdown) {
        return marked(this.mutateMarkdown, {
          highlight(md) {
            return highlight.highlightAuto(md).value
          },
        })
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep code:before {
  content: '' !important;
}
</style>
