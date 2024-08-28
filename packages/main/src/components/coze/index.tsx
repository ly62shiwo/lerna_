import { useEffect, useState } from 'react';

function Coze(initialValue: any) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    // 在组件挂载或值发生变化时执行的副作用逻辑
    // 可以在这里进行数据获取、订阅等操作
    // 返回一个清理函数，用于在组件卸载或值发生变化时清理副作用
    return () => {
      // 在这里进行清理操作，比如取消订阅、清除定时器等
    };
  }, [value]); // 传入依赖数组，只有当数组中的值发生变化时才会重新执行副作用逻辑

  return <div></div>;
}
