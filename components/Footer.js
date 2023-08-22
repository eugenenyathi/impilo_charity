import Image from "next/image";
import Link from "next/link";
import impiloLogo from "/public/images/impilo-logo.png";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-wrapper">
      <div className="footer-inner-wrapper width-container">
        <div className="footer-org-logo">
          <Image
            src={impiloLogo}
            alt="impilo-uplifting-change-logo"
            width={170}
            height={90}
          />
        </div>
        <div className="social-media-links">
          <ul className="ul-list">
            <li>
              <Link href="#">
                <FaFacebook className="footer-icon" />{" "}
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram className="footer-icon" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaTwitter className="footer-icon" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaYoutube className="footer-icon" />
              </Link>
            </li>
          </ul>
          <p className="all-rights">
            &copy; {currentYear} Impilo Uplifting. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
