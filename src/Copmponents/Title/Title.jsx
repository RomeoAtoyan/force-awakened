const Title = ({ children, color, className }) => {
  return (
    <h3
      className={`${className} tracking-widest text-xl text-StarWars text-${color}`}
    >
      {children}
    </h3>
  );
};

export default Title;
