export interface ApiCountriesResponse {
  countries: ApiCountry[];
}

export interface ApiCountry {
  name: string;
  country_code: string;
}

export interface ApiCountryDetails {
  name: string;
  country_code: string;
  capital: string;
  population: number;
  flag_file_url: string;
}

export interface Country {
  name: string;
  countryCode: string;
  capital: string;
  population: number;
  flagFileUrl: string;
}
