import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-bold translate-y-[-90%] sm:translate-y-[-0%]">Hola, Soy</h2>
        <h1 className="text-5xl font-bold mb-0 translate-y-[-50%] sm:translate-y-[-0%] text-black">Mathez Jorge Alí</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "BlockChain Developer",
              2000,
              "Full-stack Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral text-2xl max-w-xl mb-6 font-bold translate-y-[-20%] sm:translate-y-[-0%]">
        Como desarrollador web, estoy comprometido a crear sitios web de alta calidad.
           aplicaciones que satisfagan las necesidades de mis clientes. 
       
      
        </p>

        <p className="text-neutral text-2xl max-w-xl mb-6 font-bold translate-y-[-20%] sm:translate-y-[-0%]">
        Con años de experiencia en desarrollo web full-stack, me especializo en el uso de
           React.js, Next js, JavaScript, Solidity, MongoDB, Express.js y Node.js para
           crear aplicaciones web escalables y robustas.
           </p>
        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <a
            href="https://drive.google.com/file/d/15X25IURJL1UG6VcDj7gwlgPI7wGrQmmX/view?usp=drive_link"
            target="blank"
          >
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>Sobre mi</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};

export default Banner;
