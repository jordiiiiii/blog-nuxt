export default async function ({ $auth, redirect, store }) {
  const user = $auth.$state.user
  if (!user || !user.admin) {
    await store.dispatch('shared/setSnackbar', {
      color: 'error',
      text: 'You are not admin',
    })
    redirect('/')
  }
}
