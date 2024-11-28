export const YouTubePlayer = ({ embeddedId }: { embeddedId: string }) => {
  return (
    <iframe
      width='560'
      height='315'
      src={`https://www.youtube.com/embed/${embeddedId}?si=wCW8vc8iJgfbGWA0`}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen
    ></iframe>
  );
};
