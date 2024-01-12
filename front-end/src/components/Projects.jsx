import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import colourOptions  from '../data/data';
import axios from 'axios';

let defaultInput = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
let defaultLabel = "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
const animatedComponents = makeAnimated();

class Project extends Component
{
  state = {
    site_name: '',
    site_desc: '',
    object: '',
    project_date: '',
    id_category: '',
    collaborators: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  saveProject = async (e) => {
    e.preventDefault(); 
    const res = await axios.post('http://127.0.0.1:8000/api/add-project', this.state); 
    if(res.data.status === 200) 
    {
      console.log(res.data.message);
      this.setState({
        site_name: '',
        site_desc: '',
        object: '',
        project_date: '',
        id_category: '',
        collaborators: '',
      })
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 422) {
          // Traitement de l'erreur 422 ici
          console.log('Erreur de validation', error.response.data);
        }
        return Promise.reject(error);
      }
    );
    
  }
    render() {
        return (
            <form className="max-w-md mx-auto" onSubmit={this.saveProject}>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="site_name" id="site_name" className={defaultInput} onChange={this.handleInput} value={this.state.site_name} placeholder=" " required />
                <label htmlFor="site_name" className={defaultLabel}>Nom du site</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <textarea type="text" name="site_desc" id="site_desc" className={defaultInput} onChange={this.handleInput} value={this.state.site_desc} placeholder=" " required />
                <label htmlFor="site_desc" className={defaultLabel}>desciption</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="object" name="object" id="object" className={defaultInput} onChange={this.handleInput} value={this.state.object} placeholder=" " required />
                <label htmlFor="object" className={defaultLabel}>Sujet</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="date" name="project_date" id="project_date" className={defaultInput} onChange={this.handleInput} value={this.state.project_date} placeholder=" " required />
                <label htmlFor="project_date" className={defaultLabel}>Date du projet</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="collaborators" id="collaborators" className={defaultInput} onChange={this.handleInput} value={this.state.collaborators} placeholder=" " required />
                <label htmlFor="collaborators" className={defaultLabel}>Collaborateurs</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Catégorie
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="id_category"
                    onChange={this.handleInput}
                    value={this.state.category}
                    autoComplete="category-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                     <option value={1}>United States</option>
                    <option value={1}>Canada</option>
                    <option value={1}>Mexico</option>
                  </select>
                </div>
                </div>
                {/* <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="languages" className="block text-sm font-medium leading-6 text-gray-900" data-te-select-label-ref>
                  Languages
                </label>
                <div className="mt-2">
                <Select
                name='languages'
                closeMenuOnSelect={false}
                onChange={this.handleInput}
                value={this.state.languages}
                components={animatedComponents}
                defaultValue=""
                isMulti
                options={colourOptions}
              />
                </div>
                </div> */}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        );
    }
}

export default Project;