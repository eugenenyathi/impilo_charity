"use client";

import InnerPagesHero from "@/components/InnerPagesHero";
import OurBeginning from "@/components/OurBeginningAboutUs";
import PageWrapper from "../page-wrapper";

export default function AboutUs() {
  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="About Us" />
        <OurBeginning />
      </div>
    </PageWrapper>
  );
}
