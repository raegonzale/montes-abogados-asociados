import PropTypes from "prop-types";
import { Header } from "./Header";
import { Contact } from "./Contact";
import { Form } from "./Form";
import { Footer } from "./Footer";

export const SiteLayout = ({ children, headerVariant = "solid", contactBanner = true }) => (
  <>
    <Header variant={headerVariant} />
    <main>{children}</main>
    {contactBanner && <Contact />}
    <Form />
    <Footer />
  </>
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerVariant: PropTypes.oneOf(["overlay", "solid"]),
  contactBanner: PropTypes.bool,
};
