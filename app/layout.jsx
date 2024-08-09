import { Inter, Lexend, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import DefaultProviders from "@/components/Providers/DefaultProviders";

export const inter = Inter({ subsets: ["latin"] });

export const oswald = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
