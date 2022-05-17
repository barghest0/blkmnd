import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PageTransition: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
