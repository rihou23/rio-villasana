import "./globals.css";
import type { Metadata } from "next";
import { profile } from "./data";

export const metadata: Metadata = {
  title: `${profile.name} – Web Developer`,
  description: `${profile.tagline}. Portfolio of ${profile.name}: projects, skills and contact.`,
  icons: {
    icon: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/code-xml.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}