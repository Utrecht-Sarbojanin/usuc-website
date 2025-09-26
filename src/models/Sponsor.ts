export interface USUCSponsor {
  id: string;
type: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  contact?: string;
  website?: string;
}

export const EMPTY_SPONSOR: USUCSponsor = {
  id: '',
  type: '',
  name: '',
  addressLine1: '',
  contact: '',
  website: ''
};
