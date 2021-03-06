import React from "react";
import MainLayout from "../layouts/MainLayout";
import InvestSection from "./InvestSection";
import StartSection from "./StartSection";
import SupportSection from "./SupportSection";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <StartSection />
        <SupportSection />
        <InvestSection />
      </MainLayout>
    </>
  );
};

export default HomePage;
