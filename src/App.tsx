import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserListPage from "./pages/UserListPage";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
