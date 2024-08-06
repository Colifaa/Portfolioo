import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "Como desarrollador front-end, me encanta desarrollar cualquier aplicación front-end utilizando React y sus bibliotecas.",
    },
    {
      id: 2,
      title: "Back End Development",
      icon: <FiServer />,
      description:
        "Estoy muy familiarizado con Node.js, Express.js y Supabase. Entonces puedo crear aplicaciones de pila completa utilizando estas tecnologías.",
    },
    {
      id: 3,
      title: "Diseño Web",
      icon: <BiPalette />,
      description:
        "También proporciono diseño de sitios web estáticos totalmente responsivos con HTML, CSS, ChakraUI, Tailwind.",
    },

     {
       id: 5,
       title: "BlockChain Developer",
       icon: <FiServer />,
       description:
       "Puedo desarrollar aplicaciones descentralizadas (dApps) y contratos inteligentes en varias plataformas blockchain con Solidity, Hardhat, OpenZeppelin y tecnologías relacionadas.",
     },

  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">Lo que proporciono</h3>
        <h1 className="text-4xl font-semibold text-center">
          Mis <span className="text-primary">Servicios</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 1 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
