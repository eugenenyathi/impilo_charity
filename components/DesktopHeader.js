"use client";
import { useState } from "react";
import { useActivePath } from "@/helpers/useActivePath";
import navLinks from "@/navigation";
import Image from "next/image";
import Link from "next/link";
import impiloLogo from "/public/images/impilo-logo.png";
import ProjectDropdown from "./ProjectDropdown";

export default function DesktopHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const checkActivePath = useActivePath();
  return (
    <div className="desktop-header-wrapper">
      <div className="desktop-header-inner-wrapper">
        <div className="left-panel">
          <ul className="ul-list">
            {navLinks.leftSide.map(({ href, name }) => (
              <li
                key={href}
                onMouseEnter={
                  href === "/projects" ? () => setShowDropdown(true) : null
                }
                onMouseLeave={
                  href === "/projects" ? () => setShowDropdown(false) : null
                }
                className={href === "/projects" ? "li-relative" : ""}
              >
                <Link
                  href={href}
                  className={
                    checkActivePath(href)
                      ? "ul-list-item list-item-active"
                      : "ul-list-item"
                  }
                >
                  {name}
                </Link>
                {href === "/projects" && (
                  <ProjectDropdown showDropdown={showDropdown} />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg-screen-logo">
          <Link href="/">
            <Image
              src={impiloLogo}
              alt="impilo-uplifting-change-logo"
              width={150}
              height={90}
            />
          </Link>
        </div>
        <div className="right-panel">
          <ul className="ul-list">
            {navLinks.rightSide.map(({ href, name }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    checkActivePath(href)
                      ? "ul-list-item list-item-active"
                      : "ul-list-item"
                  }
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
