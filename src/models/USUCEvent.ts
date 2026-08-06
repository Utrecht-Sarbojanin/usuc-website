export interface USUCEvent {
  name: string;
  date: string;
  start?: string;
  end?: string;
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

export const DURGOTSAV_2026: USUCEvent = {
  name: 'Durgotsav 2026',
  date: '16 October - 20 October, 2026',
  time: '',
  venue: 'ZIMIHC Theater Stefanus - Braziliëdreef 2, 3563 CK, Utrecht, Netherlands'
};