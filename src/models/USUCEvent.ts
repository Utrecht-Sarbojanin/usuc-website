export interface USUCEvent {
  name: string;
  date: string;
  time?: string;
  venue?:string;
  activities?: String[];
  registrationLink?: string;
}

export const EMPTY_EVENT: USUCEvent = {
  name: 'USUC Event',
  date: '',
  time: '',
  venue: ''
};

export const BOISHAKHI_2025: USUCEvent = {
  name: 'Bengali New Year 2025',
  date: '12 April, 2025',
  time: '',
  venue: 'De Schalm - Oranjelaan 10, 3454 BT, Utrecht, Netherlands'
};