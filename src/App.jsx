import "./styles/App.css";

//pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

//components
import Header from "./components/header/Header";
import MenuMobile from "./components/menuMobile/MenuMobile";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <section className="container-app">
        <MenuMobile />
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
