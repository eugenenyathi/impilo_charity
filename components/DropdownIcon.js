"use client";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DropdownIcon = ({ showDropdown, toggleDropdown }) => {
  return showDropdown ? (
    <FiChevronUp
      className="show-dropdown-icon"
      onClick={() => toggleDropdown()}
    />
  ) : (
    <FiChevronDown
      className="show-dropdown-icon"
      onClick={() => toggleDropdown()}
    />
  );
};

export default DropdownIcon;
