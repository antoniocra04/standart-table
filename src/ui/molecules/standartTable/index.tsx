import React from 'react';
import { Table } from 'antd';
import { IStandartTable } from './interfaces';

export const StandartTable: React.FC<IStandartTable> = ({ children, columns, dataSource }: IStandartTable) => {
  return (
    <Table dataSource={dataSource} columns={columns}>
      {children}
    </Table>
  );
};
