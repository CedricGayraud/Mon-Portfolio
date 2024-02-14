/* eslint-disable no-redeclare */
import React, { Component } from "react";
import axios from "axios";

class LanguageForm extends Component {
  state = {
    name: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveLanguage = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-language",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        name: "",
      });
    }

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 422) {
          console.log("Le langage n'a pas été ajouté", error.response.data);
        }
        return Promise.reject(error);
      }
    );
  };
  render() {
    return (
      <form onSubmit={this.saveLanguage}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={this.handleInput}
            value={this.state.name}
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nom du langage
          </label>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

class LanguageList extends Component {
  state = {
    languages: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/languages");
      //console.log("requete axios langages :", res);
      if (res.data.status === 200) {
        this.setState({
          languages: res.data.languages,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des langages", error);
    }
  }

  render() {
    var languages = "";
    if (this.state.loading) {
      languages = <p>Loading…</p>;
    } else {
      //console.log('loading ? : ', this.state.loading);
      //console.log('langages', this.state.languages);
      var languages = this.state.languages.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
          </div>
        );
      });
    }
    return (
      <div className="text-center">
        <h1 className="text-center text-4xl">Composant liste des langages</h1>
        {languages}
      </div>
    );
  }
}

class LanguageListById extends Component {
  state = {
    languages: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/languages");
      console.log("requete axios langages :", res);
      if (res.data.status === 200) {
        this.setState({
          languages: res.data.languages,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des langages", error);
    }
  }

  render() {
    var languages = "";
    if (this.state.loading) {
      languages = <p>Loading…</p>;
    } else {
      //console.log('loading ? : ', this.state.loading);
      console.log("langages", this.state.languages);
      var languages = this.state.languages.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
          </div>
        );
      });
    }
    return (
      <div>
        <h1>Langages</h1>
        {languages}
      </div>
    );
  }
}
export { LanguageForm, LanguageList, LanguageListById };
