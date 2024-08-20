import Image from "next/image";
import NavBar from "../../components/header/navbar";
import Welcome from "../../components/welcome/welcome";
import Topics from "../../components/topics/topics";
import AboutUs from "../../components/about/about_us";
import Services from "../../components/scope/services";
import Form from "../../components/forms/form";
import Footer from "../../components/footer/footer";
import Clients from "../../components/clientes/clients";
import IconWpp from "../../components/iconWpp/iconWpp";

export default function Home() {
  return (
    <>
      <NavBar />
      <Welcome />
      <IconWpp />
      <Topics />
      <AboutUs />
      <Services />
      {/*<Clients />*/}
      <Form />
      <Footer />
    </>
  );
}
