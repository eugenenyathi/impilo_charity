export default function YoutubeEmbed({ embedId, width, height }) {
  return (
    <div className="youtube-video-wrapper">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${embedId}?feature=oembed`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
        title="Embedded youtube"
      />
    </div>
  );
}
