import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full text-center p-8 md:p-16 bg-accent"
      style={{
        backgroundColor: "#561130",
        backgroundImage: `url('/viejas locas.jpg')`,
        backgroundSize: 'cover', // Cambiado a 'cover'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px', // Ajusta la altura mínima del footer
      }}
    >
      <div className="flex items-center justify-center mb-6">
        <a
          className="inline-block mx-2"
          href="https://twitter.com/Jorgemathez14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-2xl text-blue-600" />
        </a>
        <a
          className="inline-block mx-2"
          href="https://www.linkedin.com/in/jorge-mathez-598597260/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-blue-400" />
        </a>
        <a
          className="inline-block mx-2"
          href="https://github.com/Colifaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-black" />
        </a>
        <a
          className="inline-block mx-2"
          href="https://www.instagram.com/colifaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl text-pink-500" />
        </a>
      </div>

      <div className="w-full h-[2px] bg-gray-600"></div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4">
        <p>&copy; Copyright Todos los derechos reservados {year}</p>
        <p>
          Developed by{" "}
          <a
            href="https://linkedin.com/in/gilberthutapea"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jorge Mathez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
