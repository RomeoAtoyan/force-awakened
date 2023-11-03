import { motion } from "framer-motion";

const FadeIn = ({ children, duration }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
