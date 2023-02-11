"use client";

import { Button, Result, Typography } from "antd";
import { useEffect } from "react";
import styles from "./page.module.css";

const { Title, Paragraph, Text } = Typography;

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  function reloadPage() {
    window.location.reload();
  }

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className={styles.error}>
      <Result
        status="error"
        title="Something went wrong"
        subTitle={error.message}
        extra={[
          <Button key="reload" onClick={reloadPage}>
            Reload
          </Button>,
        ]}
      />
    </main>
  );
}
