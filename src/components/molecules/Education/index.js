import React from "react";


const Education = () => {

  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Mis <span className="text-primary">Estudios</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <img
            src="/1vA.gif"
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
    
      {/* Diploma */}
      <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
          
            <h3 className="text-2xl font-semibold text-primary">
               Full stack developer
              </h3>
              <p className="text-sm text-neutral font-semibold">2022</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            He completado con éxito el bootcamp de la compania Henry como Full-Stack Web Developer 
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
            <h3 className="text-2xl font-semibold text-primary">Blockchain Developer</h3>
              <p className="text-sm text-neutral font-semibold">2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            He completado con éxito el bootcamp de Blockchain-Bites como Blockchain Developer 
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
            <h3 className="text-2xl font-semibold text-primary">
                Tecnicatura en Programacion
              </h3>
              <p className="text-sm text-neutral font-semibold">2023 - 2025</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            Actualmente me encuentro estudiando Programacion en UTN San Rafael Mza, Argentina
            </p>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
