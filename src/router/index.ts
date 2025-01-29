import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { useGameStore } from 'src/stores/gameStore';
import routes from './routes';

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory('/wiki-millionaire/') //process.env.VUE_ROUTER_BASE),
  });

  // Navigation guards
  Router.beforeEach((to, from, next) => {
    const gameStore = useGameStore();
    const gameState = gameStore.gameState;

    if (to.meta.requiresGame && !gameState.playerName) {
      next({ name: 'welcome' });
      return;
    }

    if (to.meta.requiresNoGame && gameState.playerName && !gameState.isGameOver) {
      next({ name: 'game' });
      return;
    }

    if (to.meta.requiresGameOver && !gameState.isGameOver) {
      next({ name: gameState.playerName ? 'game' : 'welcome' });
      return;
    }

    next();
  });

  return Router;
});
