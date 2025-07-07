export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  region: string;
  flags: {
    png: any;
    svg?: string;
  };
  cca3: string;
  borders?: string[];
}
