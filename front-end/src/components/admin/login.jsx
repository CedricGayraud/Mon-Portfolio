/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import NavbarLogged from "../navbarLogged";
import Footer from "../footer";
import AuthUser from "../../api/AuthUser";

const LoginForm = () => {
  const { getToken } = AuthUser();
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    //console.log("email :", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    //console.log("mot de passe :", e.target.value);
  };

  const handleLogin = () => {
    http.post("/login", { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);
      console.log(res.data);
    });
  };

  return (
    <div>
      <NavbarLogged />
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
