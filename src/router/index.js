import { createMemoryHistory, createRouter } from 'vue-router'

import AskAi from '../views/AskAi.vue'
import RandomAdvice from '../views/RandomAdvice.vue'

const routes = [
  { path: '/', component: AskAi },
  { path: '/getadvice', component: RandomAdvice },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;