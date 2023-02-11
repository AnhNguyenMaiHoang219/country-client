import { CountryDetails, CountrySelect } from "../features/country/components";
import { fetchCountries } from "../features/country/server";
import styles from "./page.module.css";

export default async function Home() {
  const countriesResponse = await fetchCountries();

  return (
    <main className={styles.main}>
      <CountrySelect countries={countriesResponse.countries} />
      <CountryDetails />
    </main>
  );
}
