import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'welcome',
        component: () => import('pages/WelcomePage.vue'),
        meta: {
          requiresNoGame: true
        }
      },
      {
        path: 'game',
        name: 'game',
        component: () => import('pages/GamePage.vue'),
        meta: {
          requiresGame: true
        }
      },
      {
        path: 'game-over',
        name: 'gameOver',
        component: () => import('pages/GameOverPage.vue'),
        meta: {
          requiresGameOver: true
        }
      }
    ]
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  }
];

export default routes;
