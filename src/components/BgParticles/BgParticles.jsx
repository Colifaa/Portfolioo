import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo, useEffect, useState } from "react";

const ParticlesBg = (props) => {
  const [particleCount, setParticleCount] = useState(50);

  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(Math.floor(window.innerWidth / 20));
    };

    updateParticleCount(); // Configuración inicial

    window.addEventListener('resize', updateParticleCount);

    return () => {
      window.removeEventListener('resize', updateParticleCount);
    };
  }, []);

  const options = useMemo(() => {
    return {
      background: {
        color: "#561130",
        size: 'cover',
        position: '50% 50%',
        repeat: "no-repeat"
      },
 


      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 50,
          },
          repulse: {
            distance: 80,
          },
        },
      },
      particles: {
        shape: {
          type: "images",
          options: {
            image: {
              src: "oneee.png",
              width: "800vw",
              height: "800vw",
            },
          },
        },
        number: {
          value: particleCount,
        },
        color:{
          value:"#E36414"
        }, 
        links: {
          enable: true,
          distance: 200,
          color:{
            value:"#E36414"
          } 
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: particleCount / 1, max: particleCount / 1 },
        },
        size: {
          value: { min: 15, max: 5 }, // Valor fijo para el tamaño de las partículas
        },
      },
    };
  }, [particleCount]);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesBg;
