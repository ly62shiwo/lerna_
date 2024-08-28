import { config } from "./config";
export const defineProxy = () => {
  return {
    "/cozeApi": {
      target: config.cozeDomain,
      changeOrigin: true,
      pathRewrite: { "^/cozeApi": "" },
    },
    "/aMapApi": {
      target: config.aMapDomain,
      changeOrigin: true,
      pathRewrite: { "^/aMapApi": "" },
    },
  };
};
