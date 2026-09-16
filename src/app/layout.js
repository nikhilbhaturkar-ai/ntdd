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
          <img src="/images/whatsapp_icon.png" width="35" height="35" alt="WhatsApp" style={{ objectFit: 'contain' }} />
        </a>
      </body>
    </html>
  );
}
