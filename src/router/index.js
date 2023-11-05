import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/CounterView.vue')
  },
  {
    path: '/temperature-conversor',
    name: 'temperature-conversor',
    component: () => import('../views/TemperatureConversorView.vue')
  },
  {
    path: '/flight-booker',
    name: 'flight-booker',
    component: () => import('../views/FlightBookerView.vue')
  },
  {
    path: '/timer',
    name: 'timer',
    component: () => import('../views/TimerView.vue')
  },
  {
    path: '/crud',
    name: 'crud',
    component: () => import('../views/CRUDView.vue')
  },
  {
    path: '/circle-drawer',
    name: 'circle-drawer',
    component: () => import('../views/CircleDrawerView.vue')
  },
  {
    path: '/cells',
    name: 'cells',
    component: () => import('../views/CellsView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
