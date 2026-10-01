import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description = "Uma marca financeira conceitual construída sobre estrutura, tempo e clareza.";
export const metadata: Metadata = {
  metadataBase: new URL(url), title: "GALI — Capital & Intelligence", description,
  openGraph: { title: "GALI — Capital & Intelligence", description, type: "website", locale: "pt_BR", siteName: "GALI" },
  twitter: { card: "summary_large_image", title: "GALI — Capital & Intelligence", description },
};
export const viewport: Viewport = { themeColor: "#050505" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={inter.variable}><body>{children}</body></html>;
}
