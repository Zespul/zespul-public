import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const font = Inter({ subsets: ["latin"] });

const sharedTitle = "Zespul";
const sharedDescription = "Encuentra equipo gratis para tus proyectos.";
const sharedImage = "https://zespul.vercel.app/zespul.png";

export const metadata = {
  title: sharedTitle,
  description: sharedDescription,

  openGraph: {
    title: sharedTitle,
    description: sharedDescription,
    url: "https://zespul.vercel.app/",
    images: [
      {
        url: sharedImage,
        width: 800,
        height: 600,
        alt: "Imagen de Zespul",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: sharedTitle,
    description: sharedDescription,
    images: [sharedImage],
  },
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
