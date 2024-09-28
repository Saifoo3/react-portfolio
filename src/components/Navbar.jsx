// // import logo from "../assets/saiflogo.png";
// // import { FaLinkedin } from "react-icons/fa";
// // import { FaGithub } from "react-icons/fa";
// // import { FaInstagram } from "react-icons/fa";

// // const Navbar = () => {
// //   return (
// //     <nav className="mg-20 flex items-center justify-between py-6">
// //         <div className="flex flex-shrink-0 items-center">
// //             <img className="mx-2 w-20" src={logo} alt="logo" />
// //         </div>
// //         <div className= "m-6 flex items-center justify-center gap-5 text-2xl ">
// //         <FaLinkedin />
// //         <FaGithub />
// //         <FaInstagram />
// //         </div>
// //     </nav>
// //   )
// // }

// // export default Navbar;  

// import logo from "../assets/saiflogo.png";
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="mg-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <a href="/" rel="noopener noreferrer">
//           <img className="mx-2 w-20" src={logo} alt="logo" />
//         </a>
//       </div>
//       <div className="m-6 flex items-center justify-center gap-5 text-2xl">
//         <a href="https://www.linkedin.com/in/saifmohammed-azeem-as234/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com/Saifoo3?tab=repositories" target="_blank" rel="noopener noreferrer">
//           <FaGithub />
//         </a>
//         <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
//           <FaInstagram />
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import logo from "../assets/saiflogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 
import { TbFileCv } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="mg-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" rel="noopener noreferrer">
          <img className="mx-2 w-20" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-6 flex items-center justify-center gap-5 text-2xl">
        <a href="https://www.linkedin.com/in/saifmohammed-azeem-as234/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Saifoo3?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://drive.google.com/file/d/1fcSlrDhJl6BYlhddauZPRTZV8qx8jDDu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <TbFileCv title="View/Download Resume" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
