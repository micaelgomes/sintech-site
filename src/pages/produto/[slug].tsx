import { useRouter } from "next/router";
import Container from "../../components/Container";
import Faq from "../../components/faq";
import Accordion from "../../components/Accordion";
import Footer from "../../components/Footer";
import HeaderProduto from "../../components/HeaderProduto";
import Partners from "../../components/Partners";

const Produto = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log("produto: ", slug);

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
