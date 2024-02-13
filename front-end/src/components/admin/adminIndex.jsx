import React from "react";
import Footer from "../footer";
import ProjectForm from "../Projects";
import { LanguageForm } from "../languages";
import CategoryForm from "../categories";

const AdminIndex = () => {
  return (
    <div>
      <h2>Tableau de bord d'administration</h2>
      <ProjectForm />
      <CategoryForm />
      <LanguageForm />
      <Footer />
    </div>
  );
};

export default AdminIndex;
