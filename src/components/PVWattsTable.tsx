import React from 'react';
import { TableData } from '../interfaces';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { DayRow } from './DayRow';

interface PVWattsTableProps {
  tableData: TableData;
  backToForm: () => void;
}

export const PVWattsTable: React.FC<PVWattsTableProps> = ({ tableData, backToForm }) => {
  const thisYear = new Date().getFullYear();
  const numOfDays = tableData.ac.length / 24;
  const dayRows = [];

  // Format the data to generate the table
  for (let dayIndex = 1; dayIndex <= numOfDays; dayIndex++) {
    // The indicies for ac and poa data.
    const dataIndicies = [...Array(24)].map((_, i) => (dayIndex - 1) * 24 + i);
    dayRows.push({
      day: new Date(thisYear, 0, dayIndex),
      hourData: dataIndicies.map(dataIndex => (
        { ac: tableData.ac[dataIndex], poa: tableData.poa[dataIndex] }
      ))
    })
  }

  return (
    <>
      <h1>AC System Output and POA Irridiance for {thisYear}</h1>
      <Button className="mb-3" onClick={backToForm}>Back to Form</Button>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Hour</th>
            <th>AC System Output</th>
            <th>Plane of Array Irridiance</th>
          </tr>
        </thead>
        <tbody>
          {dayRows.map((dayRow, index) => (
            <DayRow day={dayRow.day} hourData={dayRow.hourData} key={`dayRow_${index}`} />
          ))}
        </tbody>
      </Table>
      <Button onClick={backToForm}>Back to Form</Button>
    </>
  );
};
