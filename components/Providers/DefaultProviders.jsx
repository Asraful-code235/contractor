"use client";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function DefaultProviders({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
