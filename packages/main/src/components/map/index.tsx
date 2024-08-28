import AMapLoader from '@amap/amap-jsapi-loader';
import { config } from '@wa/clients';
import { useEffect } from 'react';

const AMapExample = () => {
  let map: any = null;
  useEffect(() => {
    AMapLoader.load({
      key: config.AmapJSAPI, // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0',
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        map = new AMap.Map('container', {
          // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });

        //异步加载控件
        map.plugin('AMap.ToolBar', function () {
          var toolbar = new AMap.ToolBar(); //缩放工具条实例化
          map.addControl(toolbar);
        });
        
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {
      map?.destroy();
    };
  }, []);

  return <div id="container" style={{ width: '100%', height: '400px' }}></div>;
};

export default AMapExample;
