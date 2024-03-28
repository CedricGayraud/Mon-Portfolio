import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";

let defaultInput =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
let defaultLabel =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

const JobForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobDescription: "",
    enterpriseName: "",
    dateStart: "",
    dateEnd: "",
  });

  const navigate = useNavigate();
  const [languages, setLanguages] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    //console.log("formdata :", formData);
  };

  const handleSelectLanguage = (selectedOptions) => {
    const selectedLanguageIds = selectedOptions.map((option) => option.value);
    setSelectedLanguages(selectedLanguageIds);
  };

  const saveJob = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("jobDescription", formData.jobDescription);
    formDataToSend.append("enterpriseName", formData.enterpriseName);
    formDataToSend.append("dateStart", formData.dateStart);
    formDataToSend.append("dateEnd", formData.dateEnd);
    selectedLanguages.forEach((languageId) => {
      formDataToSend.append("languages_id[]", languageId);
    });
    //console.log(formDataToSend);

    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-job",
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
        name: "",
        jobDescription: "",
        enterpriseName: "",
        dateStart: "",
        dateEnd: "",
      });
      setSelectedLanguages([]);
      navigate("/");
    } else {
      console.log("Erreur, le job n'a pas été enregistré", res.data);
    }
  };

  const languagesOptions = languages.map((language) => ({
    value: language.id,
    label: language.name,
  }));

  const animatedComponents = makeAnimated();

  return (
    <div>
      <form
        className="max-w-md mx-auto mt-6"
        onSubmit={saveJob}
        method="post"
        encType="multipart/form-data"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className={defaultInput}
            onChange={handleInput}
            value={formData.name}
            placeholder=" "
            required
          />
          <label htmlFor="name" className={defaultLabel}>
            Nom du job
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            type="text"
            name="jobDescription"
            id="jobDescription"
            className={defaultInput}
            onChange={handleInput}
            value={formData.jobDescription}
            placeholder=" "
            required
          />
          <label htmlFor="jobDescription" className={defaultLabel}>
            Desciption
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="enterpriseName"
            id="enterpriseName"
            className={defaultInput}
            onChange={handleInput}
            value={formData.enterpriseName}
            placeholder=" "
            required
          />
          <label htmlFor="enterpriseName" className={defaultLabel}>
            Nom de l'entreprise
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="dateStart"
            id="dateStart"
            className={defaultInput}
            onChange={handleInput}
            value={formData.dateStart}
            placeholder=" "
            required
          />
          <label htmlFor="dateStart" className={defaultLabel}>
            Date du projet
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="dateEnd"
            id="dateEnd"
            className={defaultInput}
            onChange={handleInput}
            value={formData.dateEnd}
            placeholder=" "
            required
          />
          <label htmlFor="dateEnd" className={defaultLabel}>
            Collaborateurs
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <div className="mt-2">
              <label htmlFor="JobLanguages" className={defaultLabel}>
                Langages
              </label>

              <Select
                id="JobLanguages"
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

export default JobForm;
