import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [buttonMessage, setButtonMessage] = useState("Hide Button");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => {
          setIsVisible(!isVisible);
          if (!isVisible) {
            setButtonMessage("Hide Animation");
          } else if (isVisible) {
            setButtonMessage("Show Animation");
          }
        }}
        type="button"
        className=" flex items-center bg-sky-500 text-white font-semibold px-5 py-2 m-2 rounded-lg hover:bg-blue-400"
      >
        {buttonMessage}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 50, 100, 100, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              time: [0, 0.25, 0.5, 0.5, 0],
            }}
            className="w-40 h-40 bg-slate-300"
          ></motion.div>
        )}
        ;
      </AnimatePresence>
    </div>
  );
}

export default App;
