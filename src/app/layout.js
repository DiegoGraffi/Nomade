import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenuDemo from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Nómade",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenuDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
