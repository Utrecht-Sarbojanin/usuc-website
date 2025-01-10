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

export const DIWALI_2024: USUCEvent = {
  name: 'Diwali Nostalgia 2024',
  date: '3 November, 2024',
  time: '',
  venue: 'De Schalm - Oranjelaan 10, 3454 BT, Utrecht, Netherlands'
};