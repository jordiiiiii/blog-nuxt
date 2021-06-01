export const strict = process.env.NODE_ENV !== 'production'

// to fix error
// Error: [vuex] do not mutate vuex store state outside mutation handlers.
// when modify tags, post, users
