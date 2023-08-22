"use client";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
}
