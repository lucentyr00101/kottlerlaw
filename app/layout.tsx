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
  title: "Kottler & Kottler | Los Angeles Personal Injury Attorneys",
  description:
    "Los Angeles personal injury attorneys since 1968. Free consultation, no fees unless we win. Call 888-300-2266, available 24/7.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${libreCaslon.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
