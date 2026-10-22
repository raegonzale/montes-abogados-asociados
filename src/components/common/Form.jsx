import { Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import useTheme from "../../constants/useTheme";

export const Form = () => {
  const { theme } = useTheme();
  const [submitMessage, setSubmitMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Debes ingresar el nombre"),
      lastName: Yup.string().required("Debes ingresar tus apellidos"),
      email: Yup.string().email("Ingresa un correo válido").required("Debes ingresar tu email"),
      number: Yup.string()
        .required("Debes ingresar tu numero celular")
        .matches(/^[0-9]{10}$/, {
          message: "Debes ingresar un numero de 10 digitos (301+1234567)",
        }),
    }),
    onSubmit: async (data, { resetForm, setSubmitting }) => {
      setSubmitMessage("");
      try {
        const response = await fetch("https://getform.io/f/warkerlb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error("No se pudo enviar el formulario");
        resetForm();
        setSubmitMessage("Tu información se envió correctamente.");
      } catch {
        setSubmitMessage("No se pudo enviar el formulario. Inténtalo de nuevo.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.textPrimary,
      }}
      className="mx-auto flex min-h-[400px] w-full items-center justify-center px-6 py-10 xl:min-h-[300px]"
    >
      <div
        style={{
          backgroundColor: theme.background,
        }}
        className="mx-auto w-full px-6 xl:w-[800px]"
      >
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
                label="Digita tu nombre"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={Boolean(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                onBlur={formik.handleBlur}
                style={{
                  backgroundColor: theme.form,
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textSecondary,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                name="lastName"
                fullWidth
                variant="filled"
                label="Digita tu apellido"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
                onBlur={formik.handleBlur}
                style={{
                  backgroundColor: theme.form,
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textSecondary,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                name="email"
                fullWidth
                variant="filled"
                label="digitatu@email.com"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                style={{
                  backgroundColor: theme.form,
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textSecondary,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                name="number"
                fullWidth
                variant="filled"
                label="Digita tu número celular"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.number}
                error={Boolean(formik.touched.number && formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
                onBlur={formik.handleBlur}
                style={{
                  backgroundColor: theme.form,
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textSecondary,
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} lg={6}>
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                fullWidth
                variant="contained"
                aria-label="Enviar formulario"
                endIcon={<SendIcon />}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
          {submitMessage && <p role="status" className="pt-3 text-center">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};
