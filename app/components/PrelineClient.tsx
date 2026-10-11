"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Re-initialises Preline's JavaScript plugins (collapse, etc.) on every route change.
// "preline/non-auto" exposes HSStaticMethods as a named export, so nothing is read off `window`.
export default function PrelineClient() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    import("preline/non-auto").then(({ HSStaticMethods }) => {
      if (cancelled) return;
      HSStaticMethods.cleanCollection();
      HSStaticMethods.autoInit();
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
