import React from 'react';
import { TableData } from '../interfaces';
import Button from 'react-bootstrap/Button';

interface PVWattsTableProps {
  tableData: TableData;
  backToForm: () => void;
}

export const PVWattsTable: React.FC<PVWattsTableProps> = ({ tableData, backToForm }) => (
  <>
    <h1>Table Data</h1>
    <Button onClick={backToForm}>Back to Form</Button>
  </>
);
