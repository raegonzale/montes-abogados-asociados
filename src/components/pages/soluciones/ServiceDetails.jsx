import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../../context/ServiceContext";
import { SiteLayout } from "../../common/SiteLayout";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useTheme from "../../../constants/useTheme";

const ServiceDetails = () => {
  const { serviceDataId } = useParams();
  const dataServices = useContext(ServiceContext);
  const serviceSelected = dataServices.find((service) => service.id === Number(serviceDataId));
  const { theme } = useTheme();

  if (!serviceSelected) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <SiteLayout>
      <div style={{ backgroundColor: theme.background, color: theme.textPrimary }}>
      <div className="mx-auto h-[900px] flex flex-col justify-center items-center pt-5 xl:flex xl:flex-row xl:justify-evenly xl:h-[600px] xl:max-w-[1280px] xl:px-24 ">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              mt: 1,
              ml: 1,
              width: 300,
              height: 340,
            },
          }}
        >
          <Paper elevation={10}>
            {" "}
            <img
              src={serviceSelected.backgroundImage}
              alt=""
              style={{ width: "100%", height: "100%", display: "block" }}
            />{" "}
          </Paper>
        </Box>

        <div className=" px-6 flex flex-col items-center h-[350px] py-10 xl:pl-20 ">
              <div style={{ color: theme.primary }} className="text-[40px] font-abc2 font-black xl:text-[50px]">
                {serviceSelected.title}
              </div>
          <p className="font-abc2 leading-tight text-center text-[20px] pt-5">
            {serviceSelected.content}
          </p>
        </div>


      </div>

      </div>
    </SiteLayout>
  );
};

export default ServiceDetails;
