import Header from "@/components/header/header";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default HomeLayout;
