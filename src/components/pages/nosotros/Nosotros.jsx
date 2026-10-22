import { SiteLayout } from "../../common/SiteLayout";
import { PageTitle } from "../../common/PageTitle";
import { History } from "./History";
import { Team } from "./Team";
import { SliderTwo } from "./SliderTwo";
import { Profile } from "./Profile";

export const Nosotros = () => (
  <SiteLayout>
    <PageTitle title="Nosotros" />
    <History />
    <Team />
    <SliderTwo />
    <Profile />
  </SiteLayout>
);
