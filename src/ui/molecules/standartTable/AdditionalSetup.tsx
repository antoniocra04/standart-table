import { Space, Button } from 'antd';
import { IStandartTableAdditionalConfig } from './interfaces';

export const generateAdditionalSetup = (config: IStandartTableAdditionalConfig | undefined) => {
  let additionalSetup = {};

  if (config) {
    additionalSetup = {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          {config.onClickEditButtion ? (
            <Button type="primary" onClick={config.onClickEditButtion}>
              Edit
            </Button>
          ) : (
            ''
          )}

          {config.onClickDeleteButton ? (
            <Button type="primary" danger onClick={config.onClickDeleteButton}>
              Delete
            </Button>
          ) : (
            ''
          )}
        </Space>
      ),
    };
  }

  return additionalSetup;
};
