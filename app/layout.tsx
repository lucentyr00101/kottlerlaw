import type { Metadata } from "next";
import { DM_Sans, Libre_Caslon_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreCaslon = Libre_Caslon_Display({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kottler & Kottler | Southern California Personal Injury Attorneys",
  description:
    "Boutique, family-owned Los Angeles personal injury firm serving Southern California since 1968. Free consultation, no fees unless we win. Habla Español. Call 888-300-2266.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${libreCaslon.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
