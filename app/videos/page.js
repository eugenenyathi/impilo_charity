import InnerPagesHero from "../../components/InnerPagesHero";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import PageWrapper from "../page-wrapper";

export default function Videos() {
  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Videos" />
        <div className="videos-wrapper width-container">
          <YoutubeEmbed embedId="aAADYvkW2tA" width={800} height={500} />
        </div>
      </div>
    </PageWrapper>
  );
}
