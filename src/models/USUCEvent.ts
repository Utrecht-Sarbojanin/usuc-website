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

export const DURGA_PUJA_2024: USUCEvent = {
  name: 'Durgotsav 2024',
  date: '9 October to 13 October, 2024',
  time: '',
  venue: 'ZIMIHC Theater Stefanus'
};