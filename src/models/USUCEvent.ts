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

export const DURGOTSAV_2025: USUCEvent = {
  name: 'Durgotsav 2025',
  date: '27 September - 1 October, 2025',
  time: '',
  venue: 'ZIMIHC Theater Stefanus - Braziliëdreef 2, 3563 CK, Utrecht, Netherlands'
};