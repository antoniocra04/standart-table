import { ColumnsType } from 'antd/lib/table';
import React from 'react';

export interface IStandartTable {
  children?: React.ReactChildren;
  columns: ColumnsType<IStandartTableDataSource>;
  dataSource: IStandartTableDataSource[];
}

export interface IStandartTableDataSource {
  key: string;
  [others: string]: unknown;
}
