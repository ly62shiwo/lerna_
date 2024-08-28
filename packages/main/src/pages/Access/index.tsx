import { PageContainer } from '@ant-design/pro-components';
import { config } from '@wa/clients';
import { Access, useAccess, useRequest } from '@umijs/max';
import { Button } from 'antd';
import axios from 'axios';
import { request } from '@@/plugin-request'
const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
