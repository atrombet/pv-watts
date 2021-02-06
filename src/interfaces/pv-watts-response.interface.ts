import { PVWattsParams } from './pv-watts-params.interface';

export interface PVWattsResponse {
  errors: any;
  inputs: PVWattsParams;
  outputs: PVWattsOutputs;
  ssc_info: any;
  station_info: any;
  version: string;
  warnings: any;
}

export interface PVWattsOutputs {
  ac: number[];
  ac_annual: number;
  ac_monthly: number[];
  capacity_factor: number;
  dc: number[];
  dc_monthly: number[];
  df: number[];
  dn: number[];
  poa: number[];
  poa_monthly: number[];
  solrad_annual: number;
  solrad_monthly: number[];
  tamb: number[];
  tcell: number[];
  wspd: number[];
}
