import { motion } from "framer-motion";

const FadeIn = ({ children, duration,className }) => {
  return (
    <motion.div
    className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
