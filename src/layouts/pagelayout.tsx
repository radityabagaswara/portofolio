import Navbar from "@/components/navbar/navbar";
import React from "react";

interface props {
  children: React.ReactNode;
}

const PageLayout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
