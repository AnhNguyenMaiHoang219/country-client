"use client";

import { Card, Col, Image, Row, Statistic } from "antd";
import { FALLBACK_FLAG_IMAGE } from "../constants";
import { useCountryStore } from "../store";
import styles from "./country.module.css";

export default function CountryDetails() {
  const country = useCountryStore((state) => state.country);
  const loading = useCountryStore((state) => state.loading);
  const error = useCountryStore((state) => state.error);

  if (!country) return null;

  const { name, flagFileUrl, capital, countryCode, population } = country;
  const defaultData = "N/A";

  return (
    <Card className={styles.card}>
      <Row gutter={[12, 32]}>
        <Col span={24}>
          <Row justify="center">
            <Image
              className={styles.flag}
              width={200}
              src={flagFileUrl}
              fallback={FALLBACK_FLAG_IMAGE}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="start">
            <Statistic
              title="Name"
              value={name ?? defaultData}
              loading={loading}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="start">
            <Statistic
              title="Capital"
              value={capital ?? defaultData}
              loading={loading}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="start">
            <Statistic
              title="Code"
              value={countryCode ?? defaultData}
              precision={2}
              loading={loading}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="start">
            <Statistic
              title="Population"
              value={population ?? defaultData}
              loading={loading}
            />
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
