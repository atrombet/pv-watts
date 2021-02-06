import React from 'react';

interface DayRowProps {
  day: Date;
  hourData: {
    ac: number;
    poa: number;
  }[]
}

export const DayRow: React.FC<DayRowProps> = ({ day, hourData }) => {
  // Create a table row for each hour and insert the day in the first row.
  const rows = hourData.map((data, index) => {
    return (
      <tr key={`hourData_${index}`}>
        {index === 0 ? <td rowSpan={24}>{day.toDateString()}</td> : <></>}
        <td>{('00' + index).slice(-2) + '00'}</td>
        <td>{data.ac}</td>
        <td>{data.poa}</td>
      </tr>
    );
  });

  return (
    <>
      {rows}
    </>
  );
};
