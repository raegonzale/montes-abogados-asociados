import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import BlogsContextProvider from "./context/BlogsContext";
import ServiceContextProvider from "./context/ServiceContext";
import ScrollToTop from "./components/common/ScrollToTop";
import FloatingButton from "./components/common/FloatingButton"

const Home = lazy(() => import("./components/pages/home/Home").then(({ Home }) => ({ default: Home })));
const Soluciones = lazy(() => import("./components/pages/soluciones/Soluciones").then(({ Soluciones }) => ({ default: Soluciones })));
const Nosotros = lazy(() => import("./components/pages/nosotros/Nosotros").then(({ Nosotros }) => ({ default: Nosotros })));
const InsigthsB = lazy(() => import("./components/pages/insigths/InsigthsB").then(({ InsigthsB }) => ({ default: InsigthsB })));
const BlogDetail = lazy(() => import("./components/pages/insigths/BlogDetail"));
const ServiceDetails = lazy(() => import("./components/pages/soluciones/ServiceDetails"));
const ContactUs = lazy(() => import("./components/pages/contact/ContactUs"));

function App() {
  return (
    <ThemeProvider>
      <ServiceContextProvider>
        <BlogsContextProvider>
          <Router>
            <ScrollToTop />
            <Suspense fallback={<div role="status">Cargando...</div>}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/soluciones" element={<Soluciones />} />
              <Route path="/soluciones/:serviceDataId" element={<ServiceDetails />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<ContactUs />} />
              <Route path="/insigths" element={<InsigthsB />} />
              <Route path="/insigths/:dataBlogId" element={<BlogDetail />} />
              <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
            <FloatingButton/>
          </Router>
        </BlogsContextProvider>
      </ServiceContextProvider>
    </ThemeProvider>
  );
}

export default App;
