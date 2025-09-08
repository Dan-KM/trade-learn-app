import React from "react";
import LeftSideBar from "./_components/side-bar";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
    return (
      <div>
        <LeftSideBar />
        {children}
      </div>
    );
}