"use client";

import { Skeleton, Space } from "antd";
import styles from "./page.module.css";

export default function Loading() {
  return (
    <main className={styles.main}>
      {/* <Spin size="large" /> */}
      <Space>
        <Skeleton.Input active />
        <Skeleton.Input active />
        <></>
      </Space>
      <br />
      <br />
      <Skeleton.Input active />
    </main>
  );
}
