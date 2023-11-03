import GoBackButton from "../GoBackButton/GoBackButton";

const GIF = ({ src, url }) => {
  return (
    <div className="h-60 relative sm:px-20 lg:px-40 xl:h-80 xl:px-52 lt:px-[18rem] lt:h-[40vh] 2xl:px-[35rem] md:mt-6">
      {url && <GoBackButton className={"m-4 sm:m-0"} url={url} />}
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  );
};

export default GIF;
