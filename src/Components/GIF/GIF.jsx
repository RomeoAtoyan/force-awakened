const GIF = ({ src }) => {
  return (
    <div className="h-60">
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  );
};

export default GIF;
