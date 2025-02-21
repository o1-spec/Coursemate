import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Subjects from "../components/Subjects";

function Homepage() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Subjects />
      <Features />
      <Partners />
      <Footer />
    </div>
  );
}

export default Homepage;
