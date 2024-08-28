import { defineProxy } from '@wa/clients';
import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    configProvider: {},
    // dark: true,
    // compact: true,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'wa',
  },
  proxy: defineProxy(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
