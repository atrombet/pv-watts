import { Dispatch, SetStateAction, useState } from 'react';
import { TableData } from '../interfaces';

export const useTableState = (): [ TableData, Dispatch<SetStateAction<TableData>> ] => {
  const [ tableData, setTableData ] = useState<TableData>(null as unknown as TableData);
  return [ tableData, setTableData ];
}