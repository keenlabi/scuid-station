import type { Metadata } from "next";
import "@/shared/styles/index.css";
import { inter } from "@/shared/ui/fonts";

export const metadata: Metadata = {
  title: "SCUID STATION",
  description: "A simple web builder showcasing the SCUID super component",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
