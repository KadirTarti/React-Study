import { animate, motion } from "framer-motion";

// variants
const pageAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 12;
  return totalSteps - index - 1;
};

const PageEffect = () => {
  return (
    <>
      {/* render motion divs to show the pageanimationeffect */}
      {[...Array(12)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={pageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-slate-500 relative"
          />
        );
      })}
    </>
  );
};

export default PageEffect;
