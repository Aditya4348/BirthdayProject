
export enum AppSection {
  OPENING = 'OPENING',
  REVEAL = 'REVEAL',
  MEMORIES = 'MEMORIES',
  MESSAGE = 'MESSAGE',
  SURPRISE = 'SURPRISE',
  CLOSING = 'CLOSING'
}

export interface Memory {
  id: number;
  image: string;
  caption: string;
  year: string;
}

export interface SurpriseItem {
  id: number;
  image: string;
  text: string;
  color: string;
}
