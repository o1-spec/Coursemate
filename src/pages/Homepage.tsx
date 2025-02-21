import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Subjects from "../components/Subjects";

function Homepage() {
  return (
    <div className="relative">
      <div>
        <img
          className="absolute top-[-50px] -z-10 left-[-100px]"
          src="ellipse_1.svg"
          alt="ellipse_1"
        />
        <img
          className="absolute top-[-200px] -z-10 right-0"
          src="ellipse_2.svg"
          alt="ellipse_1"
        />
        <Navbar />
        <Hero />
      </div>
      <Subjects />
      <Features />
      <Partners />
      <Footer />
    </div>
  );
}

export default Homepage;
