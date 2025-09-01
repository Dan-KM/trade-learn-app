
import Header from "@/components/local/landing-header";
import Footer from "@/components/local/landing-footer";
import React from "react";

export default function LandingsLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
}