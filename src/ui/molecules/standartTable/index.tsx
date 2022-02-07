import React from 'react';
import { Table } from 'antd';
import { IStandartTable } from './interfaces';
import { generateAdditionalSetup } from './AdditionalSetup';
export const StandartTable: React.FC<IStandartTable> = ({
  children,
  columns,
  dataSource,
  additionalConfig,
}: IStandartTable) => {
  return (
    <Table dataSource={dataSource} columns={[...columns, generateAdditionalSetup(additionalConfig)]}>
      {children}
    </Table>
  );
};
