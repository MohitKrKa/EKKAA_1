import ChairmanSpeech from "./ChairmanSpeech";
import Header from "../Header/Header";
import Hero from "./Hero";
import About from "./About";
import OurProducts from "./OurProducts";
import Offerings from "./Offerings";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
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
