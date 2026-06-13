"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // @ts-expect-error Error with loading bootstrap.bundle.min.js
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}