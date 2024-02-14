import Footer from "./footer";
import { ProjectList } from "./Projects";
import { LanguageList } from "./languages";
import ContactForm from "./contactForm";
import About from "./about";
import Experiences from "./experiences";
function FrontIndex() {
  return (
    <div>
      <About />
      <Experiences />
      <LanguageList />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default FrontIndex;
