import { DiPython } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql, SiPowerbi, SiGit } from "react-icons/si";
import { FaNodeJs, FaLinux } from "react-icons/fa";
import { motion } from "framer-motion";

const technologies = [
  { icon: <DiPython className="text-7xl text-blue-500" />, name: "Python" },
  { icon: <RiReactjsLine className="text-7xl text-cyan-500" />, name: "React" },
  { icon: <TbBrandReactNative className="text-7xl text-blue-500" />, name: "React Native" },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js" },
  { icon: <TbBrandNextjs className="text-7xl text-gray-800" />, name: "Next.js" },
  { icon: <SiMongodb className="text-7xl text-green-600" />, name: "MongoDB" },
  { icon: <SiMysql className="text-7xl text-orange-600" />, name: "MySQL" },
  { icon: <SiPowerbi className="text-7xl text-yellow-500" />, name: "Power BI" },
  { icon: <SiGit className="text-7xl text-red-500" />, name: "Git" },
  { icon: <FaLinux className="text-7xl text-yellow-500" />, name: "Linux" },
];

const iconVariants = (duration) => ({
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 ">
      {/* Heading with entry animation */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-center px-10"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={iconVariants(2.8 + index * 0.2)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <div className="rounded-xl shadow-lg bg-white p-6 hover:shadow-2xl transform transition duration-300">
              {tech.icon}
            </div>
            <p className="mt-4 text-lg font-semibold">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
