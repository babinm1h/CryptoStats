import React, { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
