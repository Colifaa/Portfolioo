import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Testimonial.css";
import Reviews from "../../../Utils/Reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";


const Testimonial = () => {
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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 parent">
      <motion.div
        className="mb-20"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">En los tiempos libres</h3>
        <h1 className="text-4xl font-semibold text-center text-primary">
         Mis hermanos de sangre
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}

      >
<Slider {...settings}>
  {Reviews.map((review) => (
    <div key={review.id} className="mt-4">
      <div
        className="mx-auto rounded-xl shadow-xl single-blog cursor-pointer border-2 border-primary pt-4 flex flex-col justify-center"
        style={{
          backgroundColor: "#313131",
          height: "550px",
          width: "550px",
          overflow: "hidden", // Agrega el desbordamiento oculto para el recuadro
          position: "relative",// Establece la posición relativa para el recuadro
  
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <video
          style={{
            position: "absolute", // Posiciona el video absolutamente dentro del contenedor
            top: "14%", // Lo coloca en la mitad verticalmente
            left: "50%", // Lo coloca en la mitad horizontalmente
            transform: "translate(-50%, -50%)", // Centra el video
            width: "100%", // Ancho del video al 100% del contenedor
            height: "auto", // Altura automática para mantener la relación de aspecto
            objectFit: "cover", // Ajustar el video para cubrir todo el contenedor
            borderRadius: "20px", // Redondea los bordes del video
            
          }}
          controls
        >
          <source src={review.video} />
        </video>
      </div>
    </div>
  ))}
</Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;