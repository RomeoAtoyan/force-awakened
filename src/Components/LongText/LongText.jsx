const LongText = ({ children, className }) => {
  return (
    <div className={className}>
      <p className="text-sm leading-5 lg:text-lg ">{children}</p>
    </div>
  );
};

export default LongText;
