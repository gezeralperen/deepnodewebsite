import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "DeepNode - Innovative Solutions",
  description: "DeepNode landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth font-sans">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rld8ece.css"></link>
      </head>
      <body
        className= "antialiased"
      >
        {children}
      </body>
    </html>
  );
}
