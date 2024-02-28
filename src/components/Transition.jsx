import { motion } from 'framer-motion';

function Transition({ children }) {
  return (
    <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }} 
    >
        {children}
    </motion.div>
  );
}

export default Transition;