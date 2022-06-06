import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const PageTransition: FC<Props> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3, delay: 0.1 }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
