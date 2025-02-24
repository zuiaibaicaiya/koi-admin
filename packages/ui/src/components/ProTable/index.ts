export { default as ProTable } from './src/index.vue';

export interface IProTableProps extends Record<any, any> {
  title: string;
  dataIndex: string;
  key: string;
}

export interface IProTableState extends Record<any, any> {
  key: string;
  name: string;
  age: number;
  address: string;
}
