import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const GoBackButton = ({ url, className }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(url)}
      className={`${className} p-2 absolute bg-[#FFE81F] z-10`}
    >
      <BiArrowBack size={25} />
    </button>
  );
};

export default GoBackButton;
