import { useRouteError } from "react-router-dom";
import "../themes/fruitables-1.0.0/lib/lightbox/css/lightbox.min.css";
import "../themes/fruitables-1.0.0/lib/owlcarousel/assets/owl.carousel.min.css";
import "../themes/fruitables-1.0.0/css/bootstrap.min.css";
import "../themes/fruitables-1.0.0/css/style.css";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default function FruitShop() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
