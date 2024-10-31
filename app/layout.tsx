import "./globals.css";

import PrelineScript from "./components/PrelineScript";
import Navbar from "./components/Navbar";
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
      </body>
      <PrelineScript />
    </html>
  );
}
