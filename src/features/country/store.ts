import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { COUNTRY_API_BASE_URL } from "./constants";
import { Country } from "./types";

type State = {
  country?: Country;
  cachedCountries: Country[];
  loading: boolean;
  error: any;
};

type Actions = {
  setCountry: (country: string) => Promise<void>;
};

const useCountryStore = create(
  immer<State & Actions>((set, get) => ({
    country: undefined,
    cachedCountries: [],
    error: undefined,
    loading: false,
    setCountry: async (countryCode) => {
      set((state) => {
        state.loading = true;
      });

      // Get country details from cache
      const foundCountry = get().cachedCountries.find(
        (country) => country.countryCode === countryCode
      );

      if (foundCountry) {
        set((state) => {
          state.country = foundCountry;
          state.loading = false;
          state.error = undefined;
        });
        return;
      }

      // No cache, get country details from API
      try {
        const countryDetails = await (
          await fetch(`${COUNTRY_API_BASE_URL}/countries/${countryCode}`)
        ).json();

        const country = {
          ...countryDetails,
          countryCode: countryDetails.country_code,
          flagFileUrl: countryDetails.flag_file_url,
        };

        set((state) => {
          state.cachedCountries.push(country);
          state.country = country;
          state.loading = false;
          state.error = undefined;
        });
      } catch (error) {
        set((state) => {
          state.error = error;
          state.loading = false;
        });
      }
    },
  }))
);

export { useCountryStore };
