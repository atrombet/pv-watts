export interface PVWattRequest {
  format: 'json' | 'xml';
  api_key: string;
  timeframe: 'monthly' | 'hourly';
  system_capacity: string;
  module_type: number;
  losses: string;
  array_type: number;
  tilt: string;
  azimuth: string;
  address: string;
  lat: string;
  lon: string;
  file_id: string;
}
