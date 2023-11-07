import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Error = ({ errorCode, className }) => {
  const [error, setError] = useState(true);

  let errorMessage;

  switch (errorCode) {
    case 400:
      errorMessage = <span>request was not valid</span>;
      break;
    case 401:
      errorMessage = <span>you are not authenticated</span>;
      break;
    case 403:
      errorMessage = <span>you are not authorized</span>;
      break;
    case 404:
      errorMessage = <span>request not found</span>;
      break;
    default:
      errorMessage = <span>request has failed</span>;
  }

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  return error ? (
    <motion.div
      className={`absolute ${className}`}
      initial={{ left: "-20%" }}
      animate={{ left: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 py-3 bg-red-600 z-50 bottom-24 left-0 flex justify-center items-center">
        <span className="text-center text-white capitalize">
          {errorMessage}
        </span>
      </div>
    </motion.div>
  ) : (
    ""
  );
};

export default Error;
