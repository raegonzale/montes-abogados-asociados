import { Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Debes ingresar el nombre"),
      lastName: Yup.string().required("Debes ingresar tus apellidos"),
      email: Yup.string().required("Debes ingresar tu email"),
    }),

    onSubmit: (data) => {
      console.log(data);
      fetch("https://getform.io/f/warkerlb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Formulario enviado exitosamente!");
            
            formik.resetForm();
          } else {
            console.error("Error enviando el formulario");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  return (
    <div className="w-full h-[400px] mx-auto px-6 flex items-center justify-center">
      <div className=" h-[200px] mx-auto px-6 flex items-center xl:w-[800px]">
        <form action="" onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} lg={6}>
              <TextField
                name="name"
                fullWidth
                variant="filled"
                label="Escribe tu nombre"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
                helperText={formik.errors.name}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                name="lastName"
                fullWidth
                variant="filled"
                label="Escribe tus apellidos"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={formik.errors.lastName}
                helperText={formik.errors.lastName}
              />
            </Grid>

            <Grid item xs={12} lg={12}>
              <TextField
                name="email"
                fullWidth
                variant="filled"
                label="digitatu@email.com"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
                helperText={formik.errors.email}
              />
            </Grid>

            <Grid item xs={5} lg={5}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<SendIcon />}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};