import "server-only";

import { COUNTRY_API_BASE_URL } from "../constants";
import { ApiCountriesResponse } from "../types";

export async function fetchCountries() {
  const res = await fetch(COUNTRY_API_BASE_URL + "/countries");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch countries. Please try again later!");
  }

  return res.json() as Promise<ApiCountriesResponse>;
}
