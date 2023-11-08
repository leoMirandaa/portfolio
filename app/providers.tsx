"use client";
import { NextUIProvider } from "@nextui-org/system";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
