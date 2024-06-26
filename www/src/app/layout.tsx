import "@/globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "react";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MorphIcons",
  description:
    "Morphing icons for React. Customise icons with variants and colours.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
