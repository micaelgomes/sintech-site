import { useRouter } from "next/router";
import Container from "../../components/globals/Container";
import Faq from "../../components/home/faq";
import Accordion from "../../components/home/Accordion";
import Footer from "../../components/globals/Footer";
import HeaderProduto from "../../components/produto/HeaderProduto";
import Partners from "../../components/home/Partners";

const Produto = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("produto: ", id);

  return (
    <Container
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-b, #A4D6ED, #E5EDF0)"
    >
      <HeaderProduto />

      <Faq />

      <Accordion />
      <Partners />

      <Footer />
    </Container>
  );
};

export default Produto;
