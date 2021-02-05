import { Dispatch, SetStateAction, useState } from 'react';
import { PVWattRequest } from '../interfaces';
import { FormFields } from '../enums';

export const useFormState = (): [ Partial<PVWattRequest>, Dispatch<SetStateAction<Partial<PVWattRequest>>> ] => {
  const initFormState: Partial<PVWattRequest> = {
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

  const [ form, setForm ] = useState<Partial<PVWattRequest>>(initFormState);

  return [ form, setForm ];
};
