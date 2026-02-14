"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const name = "Tritiya";
  const [accepted, setAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPos, setNoPos] = useState({ top: "70%", left: "55%" });

  const moveNo = () => {
    setNoPos({
      top: Math.random() * 80 + "%",
      left: Math.random() * 70 + "%",
    });
    setYesScale((s) => s + 0.15);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-200 to-red-300 overflow-hidden relative p-4">

      {/* Floating Hearts Background */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-xl md:text-2xl"
          initial={{
            y: "100vh",
            x: Math.random() * 100 + "vw",
            opacity: 0,
          }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Glass Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10 text-center z-10"
      >
        {!accepted ? (
          <>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-3xl md:text-4xl font-bold text-red-600 mb-6"
            >
              Tritiya 💌
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Will you be my Valentine? 💘
            </p>

            <div className="flex justify-center gap-4 relative min-h-[120px]">
              {/* YES BUTTON */}
              <motion.button
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() => setAccepted(true)}
                className="px-8 py-3 bg-green-500 text-white text-xl rounded-full shadow-lg active:scale-95"
              >
                Yes 💖
              </motion.button>

              {/* NO BUTTON */}
              <button
                onMouseEnter={moveNo}
                onClick={moveNo}
                style={{
                  position: "absolute",
                  top: noPos.top,
                  left: noPos.left,
                }}
                className="px-6 py-2 bg-gray-500 text-white rounded-full"
              >
                No 😢
              </button>
            </div>
          </>
        ) : (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
              Yaaay!!! ❤️
            </h1>

            <p className="text-lg text-gray-700 mb-4">
              You just made my heart so happy!
            </p>

            <div className="text-2xl md:text-3xl font-bold text-pink-600">
              Swastik ❤️ Tritiya
            </div>

            {/* Heart Burst */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
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
      </motion.div>
    </main>
  );
}
