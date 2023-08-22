import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ imgUrl, title, text, readMoreLink }) {
  return (
    <div className="project-item">
      <div className="project-item-img">
        <Image src={imgUrl} width={400} height={200} alt={`${title} image`} />
      </div>

      <div className="text-wrapper">
        <h1 className="sub-section-heading">{title}</h1>
        <p className="section-paragraph">{text}</p>
        <div className="read-more-btn-wrapper">
          <Link href={readMoreLink} className="section-read-more">
            read more
          </Link>
        </div>
      </div>
    </div>
  );
}
