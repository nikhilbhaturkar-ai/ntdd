import { Barlow, Cormorant } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
