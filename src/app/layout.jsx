import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Innovmate",
  description: "Encuentra equipo gratis para tus proyectos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
