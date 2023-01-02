import React, { useState, createContext } from "react";
import LoginPage from "./assets/LoginPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import UsersPage from "./assets/UsersPage";

export const dataContext = createContext("");
function App() {
  const [openNav, setopenNav] = useState(false);
  //
  const handleMenu = () => {
    setopenNav((prev) => !prev);
  };
  return (
    <div>
      <Router>
        <dataContext.Provider value={{ openNav, setopenNav, handleMenu }}>
          <Routes>
            <Route index exact element={<LoginPage />} />
            <Route path="Users" exact element={<UsersPage />} />
          </Routes>
        </dataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
