// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

import { RunTimeLayoutConfig } from '@umijs/max';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '～～' };
}

export const layout: RunTimeLayoutConfig = (initialState) => {
  console.log("🚀 ~ initialState:", initialState)
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export * from './services/request'
