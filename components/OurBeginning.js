import Image from "next/image";
import landingPageImage from "/public/images/our-beginning-mobile.png";
import desktopLandingPageImage from "/public/images/our-beginning1.png";
import aboutUsImage from "/public/images/about-our-beginning.jpg";
import { origins as data } from "@/data.js";

export default function OurBeginning({ page }) {
  let pageSection = null;

  for (let i = 0; i < data.length; i++) {
    if (data[i].hasOwnProperty(page)) {
      pageSection = data[i][page];
    }
  }

  return (
    <section className="our-beginning-wrapper width-container">
      <div className="text-wrapper">
        <h1 className="section-heading">Our Beginning</h1>
        {pageSection.text.map((paragraphText, index) => (
          <p key={index} className="section-paragraph">
            {paragraphText}
          </p>
        ))}
        {page === "landingPage" && (
          <button className="section-read-more">read more</button>
        )}
      </div>
      <div
        className={`image-gallery-grid ${
          page === "aboutUs" ? "image-gallery-grid about-us" : ""
        }`}
      >
        {page === "landingPage" ? (
          <Image
            src={landingPageImage}
            alt="our beginning image"
            width={500}
            height={500}
            className="gallery-image"
          />
        ) : (
          <Image
            src={aboutUsImage}
            alt="our beginning image"
            width={450}
            height={450}
            className="gallery-image"
          />
        )}
      </div>
    </section>
  );
}
