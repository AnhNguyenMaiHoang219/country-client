"use client";

import { Select, Typography } from "antd";
import { useCountryStore } from "../store";
import { ApiCountry } from "../types";
import { buildCountrySelectOptions } from "../utils";
import styles from "./country.module.css";

const { Title } = Typography;

type Props = {
  countries: ApiCountry[];
};

export default function CountrySelect({ countries }: Props) {
  const selectOptions = buildCountrySelectOptions(countries);

  const setCountry = useCountryStore((state) => state.setCountry);
  const onChange = (value: string) => setCountry(value);

  return (
    <>
      <Title level={1}>Country Infomation</Title>
      <Select
        className={styles.select}
        showSearch
        placeholder="Select a country"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={selectOptions}
      />
    </>
  );
}
