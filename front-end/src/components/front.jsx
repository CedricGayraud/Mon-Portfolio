import Footer from "./footer";
import { ProjectList } from "./Projects";
import { LanguageList } from "./languages";
import ContactForm from "./contactForm";
import About from "./about";
import Experiences from "./experiences";
import { ToastContainer } from "react-toastify";
function FrontIndex() {
  return (
    <div>
      <About />
      <Experiences />
      <LanguageList />
      <ProjectList />
      <ContactForm />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default FrontIndex;
