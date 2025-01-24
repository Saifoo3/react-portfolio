// import { FaPython } from "react-icons/fa";
// import { RiReactjsLine } from "react-icons/ri"; // React
// import { TbBrandReactNative } from "react-icons/tb"; // React Native
// import { TbBrandNextjs } from "react-icons/tb"; // Next.js
// import { SiMongodb } from "react-icons/si"; // MongoDB
// import { FaNodeJs } from "react-icons/fa"; // Node.js
// import { SiMysql } from "react-icons/si"; // MySQL
// import { SiPowerbi } from "react-icons/si"; // Power BI
// import { SiGit } from "react-icons/si"; // Git
// import { FaLinux } from "react-icons/fa"; // Linux
// import { motion } from "framer-motion";

// // Animation variant for icon bounce effect
// const iconVariants = (duration) => ({
//   initial: { y: 0, opacity: 0.8 },
//   animate: {
//     y: [-5, 0, -5], 
//     opacity: [0.8, 1, 0.8], 
//     transition: {
//       duration: duration,
//       ease: "easeInOut", 
//       repeat: Infinity,
//       repeatType: "mirror", 
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-24 ">
//       {/* Heading with entry animation */}
//       <motion.h1 
//         whileInView={{ opacity: 1, y: 0 }} 
//         initial={{ opacity: 0, y: -100 }} 
//         transition={{ duration: 1.5 }} 
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h1>

//       {/* Container for icons with entry animation */}
//       <motion.div 
//         whileInView={{ opacity: 1, x: 0 }} 
//         initial={{ opacity: 0, x: -100 }} 
//         transition={{ duration: 1.5 }} 
//         className="flex flex-wrap items-center justify-center gap-12"
//       >
//         {/* Python Icon */}
//         <motion.div
//           variants={iconVariants(2.8)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <FaPython className="text-6xl text-blue-500" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">Python</p>
//         </motion.div>

//         {/* React Icon */}
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <RiReactjsLine className="text-6xl text-cyan-500" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">React</p>
//         </motion.div>

//         {/* React Native Icon */}
//         <motion.div
//           variants={iconVariants(3.2)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <TbBrandReactNative className="text-6xl text-blue-500" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">React Native</p>
//         </motion.div>

//         {/* Node.js Icon */}
//         <motion.div
//           variants={iconVariants(3.4)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <FaNodeJs className="text-6xl text-green-500" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">Node.js</p>
//         </motion.div>

//         {/* Next.js Icon */}
//         <motion.div
//           variants={iconVariants(3.6)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <TbBrandNextjs className="text-6xl text-gray-800" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">Next.js</p>
//         </motion.div>

//         {/* MongoDB Icon */}
//         <motion.div
//           variants={iconVariants(3.8)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <SiMongodb className="text-6xl text-green-600" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">MongoDB</p>
//         </motion.div>

//         {/* MySQL Icon */}
//         <motion.div
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <SiMysql className="text-6xl text-orange-600" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">MySQL</p>
//         </motion.div>

//         {/* Power BI Icon */}
//         <motion.div
//           variants={iconVariants(4.2)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <SiPowerbi className="text-6xl text-yellow-500" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">Power BI</p>
//         </motion.div>

//         {/* Git Icon */}
//         <motion.div
//           variants={iconVariants(4.4)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <SiGit className="text-6xl text-red-500" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">Git</p>
//         </motion.div>

//         {/* Linux Icon */}
//         <motion.div
//           variants={iconVariants(4.6)}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col items-center"
//         >
//           <div className="rounded-lg shadow-lg bg-white p-6">
//             <FaLinux className="text-6xl text-yellow-500" />
//           </div>
//           <p className="mt-4 text-md text-gray-100">Linux</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;


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
