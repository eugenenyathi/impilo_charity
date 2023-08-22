"use client";
import noScroll from "no-scroll";
import { useEffect } from "react";
import { directors } from "@/data.js";
import { MdClose } from "react-icons/md";

const DirectorSidebar = ({ directorId, showSidebar, setSidebarOptions }) => {
  const director = directors.find((director) => director.id === directorId);

  useEffect(() => {
    showSidebar && noScroll.on();

    return () => {
      noScroll.off();
    };
  }, [showSidebar]);

  return (
    <aside
      className={`director-sidebar-wrapper ${showSidebar && "sidebar-active"}`}
    >
      <div className="director-inner-wrapper">
        <div className="director-details">
          <div className="head">
            <p className="director-name">{showSidebar && director.name}</p>

            {showSidebar && (
              <MdClose
                onClick={() =>
                  setSidebarOptions({ showSidebar: false, directorId: null })
                }
                className="close-icon"
              />
            )}
          </div>

          <p className="director-position">
            {showSidebar && director.position}
          </p>
        </div>

        <div className="about-director">
          <p className="director-location">
            Located: {showSidebar && director.location}
          </p>
          {showSidebar &&
            director.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default DirectorSidebar;
