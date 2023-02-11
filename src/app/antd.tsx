"use client";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import { useState, type PropsWithChildren } from "react";

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return <style dangerouslySetInnerHTML={{ __html: extractStyle(cache) }} />;
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};
