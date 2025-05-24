import ChairmanSpeech from "./ChairmanSpeech";
import Header from "../Header/Header";
import Hero from "./Hero";
import About from "./About";
import OurProducts from "./OurProducts";
import Offerings from "./Offerings";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "../../Footer";
import Navigation1 from "../Header/Navigation1";
import Navbar from "../Header/Navbar";


const Home = () => {
  return (
    <>
      <div className="bg-black">
        {/* <Header /> */}
        {/* <Navigation1/> */}
        <Navbar/>
        <Hero />
        <ChairmanSpeech />
        <About />
        <Offerings />
        <OurProducts />

        <WhyChooseUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
