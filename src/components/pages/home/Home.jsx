import { SiteLayout } from "../../common/SiteLayout";
import { PrincipalArticle } from "./PrincipalArticle";
import { SecondArticle } from "./SecondArticle";
import { ThirdArticle } from "./ThirdArticle";
import { FourthArticle } from "./FourthArticle";

export const Home = () => (
  <SiteLayout headerVariant="overlay">
    <PrincipalArticle />
    <SecondArticle />
    <ThirdArticle />
    <FourthArticle />
  </SiteLayout>
);
