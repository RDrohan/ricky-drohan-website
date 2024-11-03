import "./globals.css";

import PrelineScript from "./components/PrelineScript";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Ricky Drohan",
    default: "Main | Ricky Drohan",
  },
  description: "My personal website made with NextJS, Tailwind and Preline",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="w-full h-full mx-auto">{children}</div>
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
