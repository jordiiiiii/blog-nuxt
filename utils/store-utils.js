export const getData = async function (url, axios) {
  const response = await axios.get(url)
  return {
    data: response.data.data,
    included: response.data.included,
  }
}

export const deserializePosts = function (posts) {
  posts.forEach((p) => {
    p.attributes.tag_ids = p.relationships.tags.data.map((t) => t.id)
    if (p.attributes.createdAt) {
      p.attributes.createdAt = new Date(p.attributes.createdAt)
    }
  })
}

export const deserializeTags = function (tags) {
  tags.forEach((t) => {
    t.attributes.id = t.id
    t.attributes.post_ids = t.relationships.posts.data.map((p) => p.id)
  })
}
