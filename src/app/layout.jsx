import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zespul",
  description: "Encuentra equipo gratis para tus proyectos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen bg-white text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
