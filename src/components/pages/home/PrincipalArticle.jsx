import { useRef, useEffect } from "react";
import video from "../../../assets/video/video1.mp4";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const PrincipalArticle = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = videoRef.current;
          if (videoElement) {
            videoElement.play();
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.25,
    });

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative h-[600px] xl:flex xl:justify-center">
      <video
        ref={videoRef}
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="none" // Evitar la carga automática del video
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-skyBlue mix-blend-multiply opacity-40"></div>

      <div className="absolute top-40 flex flex-col items-center px-6 xl:top-52 xl:items-end xl:h-[400px] xl:w-[700px] xl:ml-[400px]">
        <article className="my-1 text-white font-abc2 text-[50px] font-extrabold text-center xl:text-right leading-none">
          Impulsamos el crecimiento de tu empresa con
        </article>
        <article className="my-1 mb-5 text-white font-abc2 text-[20px] leading-tight text-center xl:text-right">
          soluciones jurídicas y de gestión, enfocadas en fortalecer el
          desarrollo, competitividad y eficiencia de tu negocio.
        </article>
        <Link to="/contacto">
          <Button className="xl:mt-20 w-40" variant="contained">
            ¿Comenzamos?
          </Button>
        </Link>
      </div>
    </div>
  );
};
