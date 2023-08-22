"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import impiloLogo from "/public/images/impilo-logo.png";
import ProjectDropdown from "./ProjectDropdown";

export default function Header() {
  const leftPanelLinks = [
    { href: "/", name: "home" },
    { href: "/about-us", name: "about-us" },
    { href: "/projects", name: "projects" },
    // { href: "/", name: "blog" },
  ];

  const rightPanelLinks = [
    { href: "/board-members", name: "home" },
    { href: "/videos", name: "about-us" },
    { href: "/contact-us", name: "projects" },
  ];

  return (
    <header className="header">
      <div className="mobile-header-wrapper">
        <div className="sm-scrn-logo">Impilo Uplifting Change</div>
        <div className="menu-icon-wrapper">Menu</div>
        <div className="menu-wrapper">
          <div className="menu-inner-wrapper">
            <ul className="ul-list">
              <li className="ul-list-item">home</li>
              <li className="ul-list-item">about us</li>
              <li className="ul-list-item">projects</li>
              <li className="ul-list-item">blog</li>
              <li className="ul-list-item">board members</li>
              <li className="ul-list-item">videos</li>
              <li className="ul-list-item">contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="desktop-header-wrapper">
        <div className="desktop-header-inner-wrapper">
          <div className="left-panel">
            <ul className="ul-list">
              <li>
                <Link href="/" className="ul-list-item list-item-active">
                  home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="ul-list-item">
                  about us
                </Link>
              </li>
              <li
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link href="/projects" className="ul-list-item show-dropdown">
                  projects
                  {/* <ProjectDropdown showDropdown={showDropdown} /> */}
                </Link>
              </li>
              <li>
                <Link href="# " className="ul-list-item">
                  blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg-screen-logo">
            <Image
              src={impiloLogo}
              alt="impilo-uplifting-change-logo"
              width={150}
              height={90}
            />
          </div>
          <div className="right-panel">
            <ul className="ul-list">
              <li>
                <Link href="/board-members" className="ul-list-item">
                  board members
                </Link>
              </li>
              <li>
                <Link href="/videos" className="ul-list-item">
                  videos
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="ul-list-item">
                  contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
