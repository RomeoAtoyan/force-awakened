import GoBackButton from "../GoBackButton/GoBackButton";

const GIF = ({ src, url }) => {
  return (
    <div className="h-60 relative">
      {url && <GoBackButton url={url} />}
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  );
};

export default GIF;
