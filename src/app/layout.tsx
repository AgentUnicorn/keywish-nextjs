import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keywish",
  description: "Save your favorite keycap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
