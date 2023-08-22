"use client";
import { useState } from "react";
import Director from "../../components/Director";
import DirectorSidebar from "../../components/DirectorSidebar";
import InnerPagesHero from "../../components/InnerPagesHero";
import { directors } from "@/data.js";
import PageWrapper from "../page-wrapper";
import { container, item } from "../../animations";
import { motion as m } from "framer-motion";

export default function BoardMembers() {
  const [sidebarOptions, setSidebarOptions] = useState({
    showSidebar: false,
    directorId: null,
  });

  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Board Members" />
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="board-members-wrapper width-container"
        >
          {directors.map((director) => (
            <m.div variants={item}>
              <Director
                key={director.id}
                director={director}
                setSidebarOptions={setSidebarOptions}
              />
            </m.div>
          ))}
        </m.div>

        <DirectorSidebar
          directorId={sidebarOptions.directorId}
          showSidebar={sidebarOptions.showSidebar}
          setSidebarOptions={setSidebarOptions}
        />
      </div>
    </PageWrapper>
  );
}
