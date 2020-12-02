export { default as Card } from '../../components/Card.vue'
export { default as Form } from '../../components/Form.vue'
export { default as Label } from '../../components/Label.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Note } from '../../components/Note.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/Card" */).then(c => c.default || c)
export const LazyForm = import('../../components/Form.vue' /* webpackChunkName: "components/Form" */).then(c => c.default || c)
export const LazyLabel = import('../../components/Label.vue' /* webpackChunkName: "components/Label" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNote = import('../../components/Note.vue' /* webpackChunkName: "components/Note" */).then(c => c.default || c)
