import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-900 to-black">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold text-white"
      >
        Naresh Challa
      </motion.h1>

      <p className="mt-4 text-xl text-gray-300">
        Senior DevOps Engineer
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/resume.pdf"
          className="bg-cyan-500 px-5 py-2 rounded-lg"
        >
          Download Resume
        </a>

        <a
          href="#projects"
          className="border px-5 py-2 rounded-lg"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
