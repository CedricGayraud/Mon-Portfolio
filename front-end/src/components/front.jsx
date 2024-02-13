import Auth from "../navbar/auth";
import Guest from "../navbar/guest";
import Footer from "./footer";
import { ProjectList } from "./Projects";
import { LanguageList } from "./languages";
import ContactForm from "./contactForm";
function FrontIndex() {
  return (
    <div>
      <ProjectList />
      <LanguageList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default FrontIndex;
