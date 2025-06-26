'use client';

import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <main className="h-screen w-screen bg-gray-100 overflow-hidden relative">
      {/* Blurred moving circle */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-300 opacity-30 rounded-full filter blur-3xl"
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'easeInOut',
        }}
      />

      {/* Center text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-arabic-primary">
          قريبًا
        </h1>
        <p className="text-xl text-gray-600 font-arabic-secondary">
          تحت الإنشاء
        </p>
      </div>
    </main>
  );
}
