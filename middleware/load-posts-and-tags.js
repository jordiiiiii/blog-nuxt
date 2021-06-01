import RSVP from 'rsvp'

export default async function ({ store, from }) {
  const isInitialPageLoad = !from
  // if (isInitialPageLoad) {
  //   await store.dispatch('posts/loadAll')
  //   await store.dispatch('tags/loadAll')
  // }
  if (isInitialPageLoad) {
    await RSVP.all([
      store.dispatch('posts/loadAll'),
      store.dispatch('tags/loadAll'),
    ])
  }
}
