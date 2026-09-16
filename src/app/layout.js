import { Barlow, Cormorant } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"]
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"]
});

export const metadata = {
  title: "The 3D Crafted",
  description: "Custom 3D Printed Gifts, Decor & Prototypes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${cormorant.variable}`}>
        <Navbar />
        {children}
        <Footer />
        
        {/* Floating WhatsApp Button (Global) */}
        <a href="https://wa.me/919175256675" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
          <svg viewBox="0 0 32 32" fill="#000" width="30" height="30">
            <path d="M16 1.4C7.9 1.4 1.4 7.9 1.4 16c0 2.6.7 5.1 1.9 7.3L1.4 30.6l7.5-2c2.2 1.1 4.6 1.7 7.1 1.7 8.1 0 14.6-6.5 14.6-14.6S24.1 1.4 16 1.4zm7.9 21.2c-.3.9-1.8 1.7-2.5 1.7-.7.1-1.4.1-2.4-.2-4.1-1.3-6.9-5.4-7.1-5.7-.2-.3-1.7-2.3-1.7-4.4s1.1-3 1.5-3.4c.4-.4.8-.5 1.1-.5.3 0 .5 0 .8.1.3 0 .7-.1 1.1.8.4 1 .4 1.4 1.3 3.1.1.3.1.6 0 .8-.1.3-.2.4-.4.7-.2.2-.4.5-.6.7-.2.2-.4.4-.1.9.4.7.8 1.4 1.5 2 1 .8 1.8 1.2 2.6 1.6.4.2.7.2.9-.1.3-.3.9-1.2 1.2-1.6.3-.4.6-.3 1 .1.4.2 2.4 1.1 2.8 1.3.4.2.6.3.7.5.1.3.1.9-.2 1.8z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
