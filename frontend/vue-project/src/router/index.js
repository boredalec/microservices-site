import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QrGenerator from '../views/QrGenerator.vue'
import ImageConverter from '../views/ImageConverter.vue'
import FinanceCalculator from '../views/FinanceCalculator.vue'
import PromoGenerator from '../views/PromoGenerator.vue'
import PasswordChecker from '../views/PasswordChecker.vue'
import CryptoCalculator from '../views/CryptoCalculator.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/qr', component: QrGenerator },
  { path: '/convert', component: ImageConverter },
  { path: '/finance', component: FinanceCalculator },
  { path: '/promo', component: PromoGenerator },
  { path: '/password-check', component: PasswordChecker },
  { path: '/mining', component: CryptoCalculator },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
