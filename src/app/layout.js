import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pink Piranha",
  description:
    "We provide event staff and business solutions for corporate and music events in Ireland. Reach out to us for the best rates!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
