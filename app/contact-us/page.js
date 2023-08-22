"use client";
import { useState } from "react";
import InnerPagesHero from "../../components/InnerPagesHero";
import PageWrapper from "../page-wrapper";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleLogin = (ev) => {
    ev.preventDefault();

    if (name === "") {
      setError({ ...error, name: true });
    } else if (email === "") {
      setError({ ...error, email: true });
    } else if (message === "") {
      setError({ ...error, message: true });
    } else {
      setError({ name: false, email: false, message: false });
    }
  };

  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Contact Us" />
        <div className="contact-us-wrapper width-container">
          <div className="contact-us-form-wrapper">
            <h1 className="section-heading">We would love to hear from you.</h1>
            <form className="contact-form" onSubmit={handleLogin}>
              <div className="contact-us-form-control">
                <input
                  type="text"
                  placeholder="Name*"
                  className="contact-us-input"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
                {error.name && (
                  <p className="error">Please fill out this field.</p>
                )}
              </div>
              <div className="contact-us-form-control">
                <input
                  type="email"
                  placeholder="Email*"
                  className="contact-us-input"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                {error.email && (
                  <p className="error">Please fill out this field.</p>
                )}
              </div>
              <div className="contact-us-form-control">
                <textarea
                  cols="40"
                  rows="10"
                  placeholder="Message*"
                  className="contact-us-input"
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                />
                {error.message && (
                  <p className="error">Please fill out this field.</p>
                )}
              </div>
              <div className="contact-us-form-control checkbox">
                <input
                  type="checkbox"
                  id="comment-checkbox"
                  className="checkbox"
                  value={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="comment-checkbox" className="label">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button className="submit-btn">submit</button>
            </form>
          </div>
          <div className="map-wrapper"></div>
        </div>
      </div>
    </PageWrapper>
  );
}
