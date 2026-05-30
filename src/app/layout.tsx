import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BP Creatives | PR & Communications Agency",
  description:
    "Strategy with soul. A full-service PR and communications agency in Nairobi, Kenya. We tell your story, build your legacy, and help brands connect, influence and grow.",
  keywords: [
    "PR agency",
    "communications",
    "Nairobi",
    "Kenya",
    "brand strategy",
    "content creation",
    "BP Creatives",
  ],
  openGraph: {
    title: "BP Creatives | PR & Communications Agency",
    description:
      "A full-service PR and communications agency helping brands connect, influence and grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
