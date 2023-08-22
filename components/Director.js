"use client";
import Image from "next/image";
import { HiMiniInformationCircle } from "react-icons/hi2";

export default function Director({ director, setSidebarOptions }) {
  return (
    <div
      className="director"
      onClick={() =>
        setSidebarOptions({ showSidebar: true, directorId: director.id })
      }
    >
      <Image
        src={director.imgUrl}
        width={360}
        height={480}
        className="director-img"
        alt="director-img"
      />
      <div className="director-details">
        <p className="detail name">{director.name}</p>
        <p className="detail position">{director.position}</p>
      </div>
      <div className="director-info-cover">
        {/* <HiMiniInformationCircle className="info-icon" /> */}
      </div>
    </div>
  );
}
