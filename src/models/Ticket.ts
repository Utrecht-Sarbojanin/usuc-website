import { Menu } from './Menu';

export interface Ticket {
  type: string;
  title: string;
  date: string;
  menu: Menu;
  link: string;
}
