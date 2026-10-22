import { SiteLayout } from "../../common/SiteLayout";
import { PageTitle } from "../../common/PageTitle";
import ContactInformation from "./ContactInformation";

const ContactUs = () => (
  <SiteLayout contactBanner={false}>
    <PageTitle title="Contáctanos" size="contact" />
    <ContactInformation />
  </SiteLayout>
);

export default ContactUs;
