"use client";
import Link from "next/link";
export default function ProjectDropdown({ showDropdown, closeMenus = null }) {
  return (
    <div
      className={`project-dropdown-wrapper ${showDropdown && "show-dropdown"}`}
    >
      <ul className="dropdown-ul-list">
        <li onClick={closeMenus}>
          <Link href="/projects/" className="ul-list-item ">
            current
          </Link>
        </li>
        <li onClick={closeMenus}>
          <Link href="/projects/future" className="ul-list-item">
            future
          </Link>
        </li>
        <li onClick={closeMenus}>
          <Link href="/projects/projects-completed" className="ul-list-item">
            projects completed
          </Link>
        </li>
      </ul>
    </div>
  );
}
