import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { ProjectList } from "./Projects";
import { LanguageList } from "./languages";
import ContactForm from "./contactForm";

function FrontIndex() {
  return (
    <div>
      <Navbar />
      <ProjectList />
      <LanguageList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default FrontIndex;
