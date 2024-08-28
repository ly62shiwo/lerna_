import { notification } from 'antd';
import lodash from 'lodash';
import type { RequestConfig } from 'umi';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

// 运行时配置
export const request: RequestConfig = {
  // 统一的请求设定
  timeout: 1000,
  headers: { 'X-Requested-With': 'XMLHttpRequest', $Access_Token: 'xxxxxx' },
  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      // 拦截请求配置，进行个性化处理。
      const url = config.url.concat('?token = 123');
      return { ...config, url };
    },
  ],
  // 响应拦截器
  responseInterceptors: [
    (response: any) => {
      // 拦截响应数据，进行个性化处理
      const { data, status } = response;
      if (!lodash.includes([200], status)) {
        notification.error({
          message: '请求失败！',
          description: '',
        });
      }
      return response;
    },
  ],
};

const Headers = {};
