import React from "react";
import { ProjectForm, ProjectList } from "./components/Projects";
import { CategoryForm } from "./components/categories";
import { LanguageForm, LanguageList } from "./components/languages";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <ProjectForm />
      <CategoryForm />
      <LanguageForm />
      <ProjectList />
      <LanguageList />
      <Footer />
    </div>
  );
}

export default App;
