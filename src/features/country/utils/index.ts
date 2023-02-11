import { ApiCountry } from "../types";

function buildCountrySelectOptions(countries: ApiCountry[] = []) {
  return countries.map(({ name }) => ({
    label: name,
    value: name,
  }));
}

export { buildCountrySelectOptions };
