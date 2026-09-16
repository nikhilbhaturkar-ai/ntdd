import { Inter, Outfit } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "The 3D Crafted",
  description: "Custom 3D Printed Gifts, Decor & Prototypes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
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
