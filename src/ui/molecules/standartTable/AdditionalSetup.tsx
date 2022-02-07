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
          {config.editButton ? (
            <Button type="primary" onClick={config.editButton.onClick}>
              Edit
            </Button>
          ) : (
            ''
          )}

          {config.deleteButton ? (
            <Button type="primary" danger onClick={config.deleteButton.onClick}>
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
