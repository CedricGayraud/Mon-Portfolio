import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminIndex from "./components/admin/adminIndex";
import FrontIndex from "./components/front";
import LoginForm from "./components/admin/login";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FrontIndex />} />
          <Route path="/admin/" element={<AdminIndex />} />
          <Route path="/login/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
