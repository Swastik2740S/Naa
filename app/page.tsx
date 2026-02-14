"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "65%", left: "55%" });
  const [yesScale, setYesScale] = useState(1);

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });

    // Yes button grows every time No is chased
    setYesScale((prev) => prev + 0.1);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-red-300">

      {/* Floating Hearts Background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial={{ y: "100vh", x: Math.random() * 100 + "vw", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {!accepted ? (
        <div className="text-center z-10">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-4xl md:text-6xl font-bold text-red-600 mb-10 drop-shadow-lg"
          >
            Will you be my Valentine? 💘
          </motion.h1>

          {/* YES BUTTON */}
          <motion.button
            animate={{ scale: yesScale }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setAccepted(true)}
            className="px-10 py-4 bg-green-500 text-white text-2xl rounded-full shadow-xl hover:bg-green-600"
          >
            Yes 💖
          </motion.button>

          {/* NO BUTTON */}
          <button
            onMouseEnter={moveNoButton}
            style={{
              position: "absolute",
              top: noPosition.top,
              left: noPosition.left,
            }}
            className="px-8 py-3 bg-gray-500 text-white text-xl rounded-full shadow-lg"
          >
            No 😢
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-4">
            Yaaay!!! ❤️
          </h1>
          <p className="text-2xl text-gray-700 mb-6">
            You just made my heart so happy! 💕
          </p>

          {/* Celebration Hearts */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              initial={{ x: "50vw", y: "50vh", opacity: 1 }}
              animate={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
                opacity: 0,
              }}
              transition={{ duration: 2 }}
            >
              ❤️
            </motion.div>
          ))}
        </motion.div>
      )}
    </main>
  );
}
