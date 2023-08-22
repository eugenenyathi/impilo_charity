import Image from "next/image";

export default function InnerPagesHero({ pageTitle }) {
  return (
    <section className="hero-wrapper inner-pages">
      <div className="hero-inner-wrapper">
        <div className="hero-text-wrapper">
          <h1 className="hero-text">{pageTitle}</h1>
        </div>
      </div>
    </section>
  );
}
