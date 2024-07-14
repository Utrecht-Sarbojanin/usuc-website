import { Menu } from './Menu';

export interface Ticket {
  type: string;
  title: string;
  date: string;
  menu?: Menu;
  link: string;
}

export const EMPTY_TICKET: Ticket = {
  type: '',
  title: '',
  date: '',
  menu: { title: '', menuImages: [] },
  link: ''
};
