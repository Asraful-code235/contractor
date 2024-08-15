import { Inter, Lexend, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import DefaultProviders from "@/components/Providers/DefaultProviders";
import TopBar from "@/components/shared/TopBar";
import { getUtils } from "@/sanity/client";
import { Toaster } from "sonner";

export const inter = Inter({ subsets: ["latin"] });

export const oswald = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const utils = await getUtils();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <TopBar utils={utils} />
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer utils={utils} />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
