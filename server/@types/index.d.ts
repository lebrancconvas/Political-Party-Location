export interface IParty {
  id: number;
  code: ICode;
  name: IName;
  location: ILocation;
}

interface ICode {
  th: string;
  en: string;
}

interface IName {
  th: string;
  en: string;
}

interface ILocation {
  description: string;
  position: IPosition;
}

interface IPosition {
  lat: number;
  long: number;
}
