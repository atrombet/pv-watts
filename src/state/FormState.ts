import { Dispatch, SetStateAction, useState } from 'react';
import { PVWattsParams } from '../interfaces';
import { FormFields } from '../enums';

export const useFormState = (): [ Partial<PVWattsParams>, Dispatch<SetStateAction<Partial<PVWattsParams>>> ] => {
  const initFormState: Partial<PVWattsParams> = {
    [FormFields.SystemCapacity]: '',
    [FormFields.ModuleType]: 0,
    [FormFields.Losses]: '',
    [FormFields.ArrayType]: 0,
    [FormFields.Tilt]: '',
    [FormFields.Azimuth]: '',
    [FormFields.Address]: '',
    [FormFields.Lat]: '',
    [FormFields.Lon]: '',
    [FormFields.FileId]: ''
  };

  const [ form, setForm ] = useState<Partial<PVWattsParams>>(initFormState);

  return [ form, setForm ];
};
