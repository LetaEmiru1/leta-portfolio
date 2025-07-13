import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Transition from "@/components/Transition"; // Import the new component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Leta Malimo | Software Engineer",
  description: "Portfolio for Leta Malimo, an architectural and versatile software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable}`}>
        <div className="wrapper">
          <Header />
          <main>
            {/* Wrap the page content with our Transition component */}
            <Transition>{children}</Transition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
