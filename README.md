# Montes Abogados Asociados

Sitio web corporativo de Montes Abogados Asociados. Presenta las áreas de servicio, el equipo, artículos y canales de contacto. Es una aplicación de una sola página construida con React y Vite; el contenido se administra en archivos del propio proyecto.

## Funcionalidades

- Diseño adaptable con menú móvil, carrusel de servicios y estilos para distintos anchos de pantalla.
- Modos claro y oscuro mediante un interruptor en la cabecera.
- Video de portada, animaciones al entrar en pantalla y efecto parallax en la sección de contacto.
- Seis servicios con acordeón y página de detalle para cada uno.
- Blog con paginación y páginas de detalle de artículos.
- Perfiles del equipo, enlaces a redes sociales y botón flotante de WhatsApp.
- Formulario de contacto con validación, estado de envío y envío a Getform.
- Carga de páginas por ruta para reducir el tamaño del archivo JavaScript inicial.

## Tecnologías

- React 18 y React Router 6
- Vite 4
- Tailwind CSS 3 y Material UI 5
- Framer Motion, react-parallax y Swiper
- Formik y Yup para el formulario

## Cómo ejecutar el código

Se necesita Node.js y npm. En una terminal, entra a la carpeta del proyecto, instala las dependencias e inicia Vite:

```bash
git clone https://github.com/raegonzale/montes-abogados-asociados.git
cd montes-abogados-asociados
npm ci
npm run dev
```

Abre la dirección que muestra Vite; por defecto es `http://localhost:5173/`. Para detener el servidor, presiona `Ctrl+C` en la terminal. En PowerShell, si la política de ejecución bloquea `npm.ps1`, usa `npm.cmd ci` y `npm.cmd run dev`.

Comandos disponibles:

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Revisa `src` con ESLint. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión compilada. |

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio |
| `/soluciones` | Lista de servicios |
| `/soluciones/:serviceDataId` | Detalle de un servicio |
| `/nosotros` | Firma y equipo |
| `/contacto` | Información y formulario de contacto |
| `/insigths` | Blog |
| `/insigths/:dataBlogId` | Detalle de un artículo |

La escritura `insigths` forma parte de las rutas actuales. Cambiarla requiere actualizar las rutas y todos los enlaces internos.

## Estructura del proyecto

```text
src/
├── App.jsx                     # Proveedores, rutas y carga diferida de páginas
├── assets/                     # Imágenes, logos, iconos y videos
├── components/
│   ├── common/                 # Cabecera, layout, títulos, formulario, pie y efectos
│   └── pages/                  # Inicio, soluciones, nosotros, contacto y blog
├── constants/                  # Perfiles del equipo y hook de tema
└── context/                    # Tema, servicios y artículos
```

Para actualizar el contenido:

- **Servicios:** `src/context/ServiceContext.jsx`.
- **Artículos del blog:** `src/context/BlogsContext.jsx`.
- **Perfiles del equipo:** `src/constants/index.js`.
- **Datos de contacto y redes:** `src/components/common/Footer.jsx`, `FloatingButton.jsx` y `src/components/pages/contact/ContactInformation.jsx`.
- **Formulario y destino de envío:** `src/components/common/Form.jsx`.
- **Colores del tema:** `src/context/ThemeContext.jsx`; utilidades de estilo en `tailwind.config.js`.

`SiteLayout.jsx` reúne la cabecera, el formulario, el pie y, según la página, el banner parallax. `PageTitle.jsx` dibuja los títulos interiores. El proyecto no incluye un backend ni un CMS.

## Antes de publicar

**Los textos y las imágenes actuales son de demostración.** Se deben crear, revisar y aprobar los textos e imágenes definitivos de cada sección antes de publicar el sitio. Esto incluye las descripciones de servicios, la historia de la firma, los artículos, los perfiles del equipo y sus fotografías. El repositorio todavía contiene texto de ejemplo (`Lorem ipsum`) en varias de esas secciones.

También deben verificarse con la firma los enlaces de los perfiles, las cifras de la portada y los datos de contacto.

El formulario envía datos a un endpoint externo de Getform definido en el código. Comprueba que pertenezca a la cuenta correcta y realiza una prueba de envío antes de usarlo en producción. El sitio utiliza `BrowserRouter`, por lo que el alojamiento debe servir `index.html` para las rutas internas al cargarlas directamente.
