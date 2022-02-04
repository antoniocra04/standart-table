import { TableProps } from 'antd/lib/table';
import React from 'react';

export interface IStandartTable {
  children: React.ReactChildren;
  columns: TableProps<IStandartTableColumn>[];
  dataSource: IStandartTableDataSource[];
}

export interface IStandartTableColumn {
  title: string;
  dataIndex: string;
  key: string;
  render: () => unknown;
}

export interface IStandartTableDataSource {
  key: string;
  [others: string]: unknown;
}
