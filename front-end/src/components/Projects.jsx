/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import colourOptions from "../data/data";
import axios from "axios";

let defaultInput =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
let defaultLabel =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
const animatedComponents = makeAnimated();

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    site_name: "",
    site_desc: "",
    project_date: "",
    collaborators: "",
    file: "",
    id_category: "",
  });
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(
          "http://127.0.0.1:8000/api/categories"
        );
        setCategories(categoriesResponse.data.categories);

        const languagesResponse = await axios.get(
          "http://127.0.0.1:8000/api/languages"
        );
        setLanguages(languagesResponse.data.languages);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchData();
  }, []);

  const handleInput = (e) => {
    if (e.target.name === "file") {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    console.log("formdata :", formData);
  };

  const handleSelectCategory = (selectedOption) => {
    setFormData({
      ...formData,
      id_category: selectedOption.value,
    });
  };

  const handleSelectLanguage = (selectedOptions) => {
    const selectedLanguageIds = selectedOptions.map((option) => option.value);
    setSelectedLanguages(selectedLanguageIds);
  };

  const saveProject = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("site_name", formData.site_name);
    formDataToSend.append("site_desc", formData.site_desc);
    formDataToSend.append("project_date", formData.project_date);
    formDataToSend.append("collaborators", formData.collaborators);
    formDataToSend.append("file", formData.file); // Ajouter uniquement le nom du fichier
    formDataToSend.append("id_category", formData.id_category);
    selectedLanguages.forEach((languageId) => {
      formDataToSend.append("languages_id[]", languageId);
    });
    console.log(formDataToSend); // Ajoutez cette ligne pour déboguer FormData

    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-project",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.data.status === 200) {
      console.log(res.data.message);
      setFormData({
        site_name: "",
        site_desc: "",
        project_date: "",
        collaborators: "",
        file: "",
        id_category: "",
      });
      setSelectedLanguages([]);
      navigate("/");
    } else {
      console.log(
        "Erreur, le projet n'a pas été enregistré, le fichier est peut-être trop lourd",
        res.data
      );
    }
  };

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const languagesOptions = languages.map((language) => ({
    value: language.id,
    label: language.name,
  }));

  const animatedComponents = makeAnimated();

  return (
    <div>
      <form
        className="max-w-md mx-auto mt-6"
        onSubmit={saveProject}
        method="post"
        encType="multipart/form-data"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="site_name"
            id="site_name"
            className={defaultInput}
            onChange={handleInput}
            value={formData.site_name}
            placeholder=" "
            required
          />
          <label htmlFor="site_name" className={defaultLabel}>
            Nom du site
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            type="text"
            name="site_desc"
            id="site_desc"
            className={defaultInput}
            onChange={handleInput}
            value={formData.site_desc}
            placeholder=" "
            required
          />
          <label htmlFor="site_desc" className={defaultLabel}>
            desciption
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="project_date"
            id="project_date"
            className={defaultInput}
            onChange={handleInput}
            value={formData.project_date}
            placeholder=" "
            required
          />
          <label htmlFor="project_date" className={defaultLabel}>
            Date du projet
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="collaborators"
            id="collaborators"
            className={defaultInput}
            onChange={handleInput}
            value={formData.collaborators}
            placeholder=" "
            required
          />
          <label htmlFor="collaborators" className={defaultLabel}>
            Collaborateurs
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="file"
            name="file"
            id="file_input"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            onChange={handleInput}
            placeholder=" "
            required
          />
          <label
            htmlFor="file_input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ajouter un fichier
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <div className="mt-2">
              <label htmlFor="category" className={defaultLabel}>
                Catégories
              </label>
              <Select
                id="category"
                name="id_category"
                closeMenuOnSelect={true}
                onChange={handleSelectCategory}
                components={animatedComponents}
                value={categoryOptions.find(
                  (option) => option.value === formData.id_category
                )}
                defaultValue=""
                isMulti={false}
                options={categoryOptions}
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <div className="mt-2">
              <label htmlFor="Projectlanguages" className={defaultLabel}>
                Langages
              </label>

              <Select
                id="Projectlanguages"
                name="languages_id"
                closeMenuOnSelect={false}
                onChange={handleSelectLanguage}
                components={animatedComponents}
                value={languagesOptions.filter((option) =>
                  selectedLanguages.includes(option.value)
                )}
                isMulti
                options={languagesOptions}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;

class ProjectList extends Component {
  // eslint-disable-next-line no-dupe-class-members
  state = {
    projects: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/projects");
      //console.log("requete axios :", res);
      if (res.data.status === 200) {
        this.setState({
          projects: res.data["projects "],
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    var projectsHtml = "";
    if (this.state.loading) {
      projectsHtml = <p>Loading…</p>;
    } else {
      //console.log('loading ? : ', this.state.loading);
      //console.log('projets', this.state.projects);
      var projectsHtml = this.state.projects.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.site_name}</p>
            <p>{item.site_desc}</p>
            <p>{item.object}</p>
            <p>{item.collaborators}</p>
          </div>
        );
      });
    }

    return (
      <div id="projects" className="text-center">
        <h1 className="text-center text-4xl">Composant projets</h1>
        {projectsHtml}
      </div>
    );
  }
}

export { ProjectForm, ProjectList };
