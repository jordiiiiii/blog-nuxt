const required = (propertyType) => {
  return (p) => (p && p.length > 0) || `The field ${propertyType} is required`
}
const minLength = (propertyType, min) => {
  return (p) =>
    (p && p.length >= min) ||
    `${propertyType} must be at least ${min} characters`
}
const maxLength = (propertyType, max) => {
  return (p) =>
    (p && p.length <= max) ||
    `${propertyType} must be less than ${max} characters`
}
const imageRequired = () => {
  return (p) =>
    (p && p.id === undefined && p.imageUrl === undefined) ||
    'The Image is required'
}
const imageSize = () => {
  return (value) =>
    !value || value.size < 1000000 || 'Avatar size should be less than 1 MB!'
}
const isEmail = () => {
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return (v) => (v && validRegex.test(v)) || 'Must be a valid email'
}

export default {
  required,
  minLength,
  maxLength,
  imageRequired,
  imageSize,
  isEmail,
}
