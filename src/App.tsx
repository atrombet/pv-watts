import React, { useState } from 'react';
import { PVWattsForm, PVWattsTable } from './components';
import { useFormState, useTableState } from './state';
import { PV_WATTS_DEFAULT_PARAMS, URLS } from './constants';
import { PVWattsOutputs, PVWattsParams, PVWattsResponse } from './interfaces';
import axios, { AxiosResponse } from 'axios';

const App: React.FC = () => {

  /****************************
   * Init App State
   ****************************/

  const [ formState, setFormState ] = useFormState();
  const [ tableData, setTableData ] = useTableState();
  const [ page, setPage ] = useState<'form' | 'table'>('form');

  /****************************
   * Event Handlers
   ****************************/

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormState((state: Partial<PVWattsParams>) => ({ ...state, [name]: value }));
  };

  const onPVWattsFormSubmit = (event: any) => {
    event.preventDefault();
    if (event.target.reportValidity()) {
      const params: PVWattsParams = {
        ...PV_WATTS_DEFAULT_PARAMS,
        ...formState
      } as PVWattsParams;

      axios.get(URLS.PV_WATTS_API, { params }).then((response: AxiosResponse<PVWattsResponse>) => {
        const outputs: PVWattsOutputs = response.data.outputs;
        setTableData({ ac: outputs.ac, poa: outputs.poa });
        setPage('table');
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  const backToForm = () => setPage('form');

  /****************************
   * Render
   ****************************/

  return (
    <div className="page">
      {page === 'form'
        ? <PVWattsForm form={formState} handleChange={handleChange} onFormSubmit={onPVWattsFormSubmit} />
        : <PVWattsTable tableData={tableData} backToForm={backToForm} />
      }
    </div>
  );
}

export default App;
