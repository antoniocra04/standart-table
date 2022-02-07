import { ColumnsType } from 'antd/lib/table';
import React from 'react';

export interface IStandartTable {
  children?: React.ReactChildren;
  columns: ColumnsType<IStandartTableDataSource>;
  dataSource: IStandartTableDataSource[];
  additionalConfig?: IStandartTableAdditionalConfig;
}

export interface IStandartTableDataSource {
  key: string;
  [others: string]: unknown;
}

export interface IStandartTableAdditionalConfig {
  onClickDeleteButton?: () => void;
  onClickEditButtion?: () => void;
}
