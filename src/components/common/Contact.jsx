import { Parallax } from "react-parallax";
import { useInView } from "react-intersection-observer";
import buildings from "../../assets/images/edificios.webp";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <Parallax
      bgImage={buildings}
      bgImageAlt="Edificios empresariales"
      strength={150}
      bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
    >
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-skyBlue/40 mix-blend-multiply" />
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="relative z-10 px-6 text-center font-abc2 text-[30px] font-black leading-none text-white sm:text-[50px] xl:w-[700px] xl:text-[65px]"
        >
          ¿Listo para llevar tu empresa a un nuevo nivel de eficiencia y seguridad jurídica?
        </motion.article>
      </section>
    </Parallax>
  );
};
