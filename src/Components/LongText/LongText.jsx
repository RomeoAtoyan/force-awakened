const LongText = ({ children, className }) => {
  return (
    <div className={className}>
      <p className="text-sm leading-5 ">{children}</p>
    </div>
  );
};

export default LongText;
