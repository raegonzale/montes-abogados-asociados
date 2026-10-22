import { useContext, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";
import { ServiceContext } from "../../../context/ServiceContext";
import { Link } from "react-router-dom";
import useTheme from "../../../constants/useTheme.js";

const SliderServices = () => {
  const serviceData = useContext(ServiceContext);
  const { theme } = useTheme();
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="mt-1 py-1" style={{ backgroundColor: theme.background }}>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.4,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3.7,
            spaceBetween: 1,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className={`max-w-[90%] xl:max-w-[86%] sm:max-w-[90%] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {serviceData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col gap-4 group relative rounded px-2 pt-1 w-[200px] h-[250px] lg:w-[250px] lg:h-[200px] xl:w-[260px] xl:h-[310px]">
              <div
                className={`absolute inset-0 bg-cover bg-center rounded-xl ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-skyBlue opacity-5 mix-blend-multiply rounded-xl group-hover:opacity-40" />
              <div className="relative p-2 xl:pt-[245px] items-center flex flex-col pt-[185px]">
                <Link to={`/soluciones/${item.id}`}>
                  <Button
                    variant="contained"
                    size="small"
                    className="cursor-pointer"
                    aria-label="Boton acceso servicios"
                  >
                    {item.title}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderServices;
