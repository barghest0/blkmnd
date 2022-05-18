import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PageTransition: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
