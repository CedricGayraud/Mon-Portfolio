import Footer from "./footer";
import { ProjectList } from "./Projects";
import { LanguageList } from "./languages";
import ContactForm from "./contactForm";
import About from "./about";
import Experiences from "./experiences";
import { JobList } from "./job";
import { ToastContainer } from "react-toastify";
function FrontIndex() {
  return (
    <div className="2xl:px-80 xl:px-72 lg:px-56 md:px-20 sm:px-10 px-6">
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
