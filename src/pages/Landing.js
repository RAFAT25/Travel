
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
      >
        أهلاً بك في نظام حجز الرحلات
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl text-center max-w-2xl"
      >
        منصة ذكية ومرنة تساعدك على إدارة الرحلات والحجوزات والتذاكر بكل سهولة واحترافية.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/dashboard')}
        className="mt-10 px-8 py-3 bg-white text-blue-700 font-semibold rounded shadow-lg hover:bg-blue-100 transition"
      >
        ابدأ الآن
      </motion.button>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="https://images.unsplash.com/photo-1585241645927-89b1f8b30dd8"
        alt="Travel Bus"
        className="mt-12 w-full max-w-3xl rounded-lg shadow-2xl"
      />
    </div>
  );
}
