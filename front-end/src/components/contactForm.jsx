/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  let [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    enterpriseName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [personType, setPersonType] = useState("selectPersonType");
  const [particulierContent, setParticulierContent] = useState(false);
  const [entrepriseContent, setEntrepriseContent] = useState(false);
  const navigate = useNavigate();
  function onChange(value) {
    console.log("Recaptcha validé:");
  }
  useEffect(() => {
    personType === "personne"
      ? setParticulierContent(true)
      : setParticulierContent(false);
    personType === "entreprise"
      ? setEntrepriseContent(true)
      : setEntrepriseContent(false);
  }, [personType]);

  const handleOnChange = (e) => {
    setPersonType(e.target.value);
  };

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SaveForm = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/send-mail", {
      ...formData,
    });
    if (res.status === 200) {
      console.log("Message :", res.data.message);
      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        enterpriseName: "",
        email: "",
        subject: "",
        message: "",
      });
      navigate("/");
    } else {
      console.log("Le message n'a pas été envoyé");
    }
  };

  return (
    <div id="contact" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-indigo-700 px-6 py-10 sm:px-10 xl:p-12">
              <h3 className="text-lg font-medium text-white">
                Contact information
              </h3>
              <p className="mt-6 max-w-3xl text-base text-indigo-50">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                  <span className="ml-3">support@workcation.com</span>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-12">
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" href="#">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" href="#">
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" href="#">
                    <span className="sr-only">X</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                Me contacter
              </h3>
              <form
                onSubmit={SaveForm}
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="personType"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Vous êtes ?
                  </label>
                  <div className="mt-1">
                    <select
                      type="text"
                      name="personType"
                      id="personType"
                      value={personType}
                      onChange={handleOnChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="selectPersonType" defaultValue="">
                        Un particulier ou une entreprise ?
                      </option>
                      <option value="personne" defaultValue="">
                        Un particulier
                      </option>
                      <option value="entreprise" defaultValue="">
                        Une entreprise
                      </option>
                    </select>
                  </div>
                </div>

                {particulierContent && (
                  <div className="sm:col-span-2 flex flex-row">
                    <div className="w-1/2 pr-4">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Nom
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          value={formData.lastname}
                          onChange={handleInput}
                          required
                          autoComplete="family-name"
                          className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 pl-4">
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Prénom
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          value={formData.firstname}
                          onChange={handleInput}
                          required
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {entrepriseContent && (
                  <div className="sm:col-span-2">
                    <div className="flex">
                      <div className="w-1/2 pr-4  flex justify-between">
                        <label
                          htmlFor="lastname"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Nom
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-gray-500"
                        >
                          Optionnel
                        </span>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={formData.lastname}
                            onChange={handleInput}
                            required
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 pl-4 flex justify-between">
                        <label
                          htmlFor="firstname"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Prénom
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-gray-500"
                        >
                          Optionnel
                        </span>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={formData.firstname}
                            onChange={handleInput}
                            required
                            autoComplete="given-name"
                            className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    </div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Nom de l'entreprise
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="enterpriseName"
                        id="enterpriseName"
                        value={formData.enterpriseName}
                        onChange={handleInput}
                        required
                        className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInput}
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Téléphone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optionnel
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleInput}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Sujet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInput}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInput}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="message-max"
                    />
                  </div>
                </div>
                <ReCAPTCHA
                  sitekey="6Ldz_nQpAAAAAJyL3mw4AHA63vEQNlWT-W29HnsU"
                  onChange={onChange}
                />
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
