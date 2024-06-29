"use client";

import { ThemeProvider } from "next-themes";
import { FC, useEffect, useState } from "react";

export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;