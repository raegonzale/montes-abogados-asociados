import { SiteLayout } from "../../common/SiteLayout";
import { PageTitle } from "../../common/PageTitle";
import { Servicios } from "./Servicios";

export const Soluciones = () => (
  <SiteLayout>
    <PageTitle title="Soluciones" size="solutions" />
    <Servicios />
  </SiteLayout>
);
