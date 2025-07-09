export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  currencies?: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [languageCode: string]: string;
  };
  borders?: string[];
}
