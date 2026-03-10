import { Montserrat, Manrope } from "next/font/google";
import Navbar from "./NavFooter/Navbar";
import Footer from "./NavFooter/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={`${manrope.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
