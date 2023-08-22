"use client";
import { useActivePath } from "@/helpers/useActivePath";
import navLinks from "@/navigation";
import Image from "next/image";
import Link from "next/link";
import impiloLogo from "/public/images/impilo-logo.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import ProjectDropdown from "./ProjectDropdown";
import DropdownIcon from "./DropdownIcon";

export default function MobileHeader() {
  const [showSidebar, setSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const checkActivePath = useActivePath();

  const closeMenus = () => {
    setShowDropdown(false);
    setSidebar(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="mobile-header-wrapper">
      <div className="sm-screen-logo">
        <Link href="/">
          <Image
            src={impiloLogo}
            alt="impilo-uplifting-change-logo"
            width={110}
            height={50}
          />
        </Link>
      </div>
      <FiMenu className="menu-icon" onClick={() => setSidebar(true)} />
      <aside className={`menu-wrapper ${showSidebar && "sidebar-active"}`}>
        <div className="menu-inner-wrapper">
          <MdClose className="close-icon" onClick={() => setSidebar(false)} />
          <ul className="ul-list">
            {navLinks.mobile.map(({ href, name }) => (
              <li
                key={href}
                onClick={href != "/projects" ? () => setSidebar(false) : null}
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
                  {href === "/projects" && (
                    <DropdownIcon
                      showDropdown={showDropdown}
                      toggleDropdown={toggleDropdown}
                    />
                  )}
                </Link>
                {href === "/projects" && (
                  <ProjectDropdown
                    showDropdown={showDropdown}
                    closeMenus={closeMenus}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
