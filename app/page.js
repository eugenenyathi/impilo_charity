"use client";
import FloatingDonate from "../components/FloatingDonate";
import Hero from "../components/Hero";
import OurBeginningMain from "../components/OurBeginningMain";
import OurVision from "../components/OurVision";
import Projects from "../components/Projects";
import CompletedProjects from "../components/CompletedProjects";
import PageWrapper from "./page-wrapper";

export default async function Home() {
  return (
    <main>
      <PageWrapper>
        <div>
          {/* =========== HERO SECTION ========== */}
          <Hero />
          {/* ============ OUR BEGINNING LANDING PAGE =============*/}
          <OurBeginningMain />
          {/* =========== OUR VISION =================== */}
          <OurVision />
          {/* ============ PROJECTS ============= */}
          <Projects />
          {/* ============ COMPLETED PROJECTS ============= */}
          <CompletedProjects />
          <FloatingDonate />
        </div>
      </PageWrapper>
    </main>
  );
}
