import ContentLoader from "react-content-loader";

const CardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={250}
    viewBox="0 0 350 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="350" height="150" />

    <rect x="20" y="160" rx="5" ry="5" width="250" height="20" />

    <rect x="20" y="190" rx="5" ry="5" width="300" height="15" />
    <rect x="20" y="210" rx="5" ry="5" width="280" height="15" />

    <circle cx="40" cy="240" r="20" />

    <rect x="70" y="230" rx="5" ry="5" width="100" height="10" />
    <rect x="70" y="245" rx="5" ry="5" width="80" height="10" />
  </ContentLoader>
);

export default CardSkeleton;
