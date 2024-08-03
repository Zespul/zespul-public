import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Innovmate",
  description: "Encuentra equipo gratis para tus proyectos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen bg-white text-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
