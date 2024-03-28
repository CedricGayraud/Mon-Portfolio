import React from "react";
import Footer from "../footer";
import ProjectForm from "../Projects";
import { LanguageForm } from "../languages";
import CategoryForm from "../categories";
import JobForm from "../job";
import { ToastContainer } from "react-toastify";
const AdminIndex = () => {
  return (
    <div>
      <h2>Tableau de bord d'administration</h2>
      <ProjectForm />
      <JobForm />
      <CategoryForm />
      <LanguageForm />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default AdminIndex;
