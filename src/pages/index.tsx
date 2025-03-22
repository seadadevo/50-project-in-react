import About from "../Components/About";
import Footer from "../Components/Footer";
import HomeSec from "../Components/HomeSec";
import NavBar from "../Components/NavBar";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div className="flex flex-col">
        <NavBar/>
      <HomeSec />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
