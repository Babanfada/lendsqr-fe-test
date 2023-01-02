import React from "react";
import LoginPage from "./assets/LoginPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import UsersPage from "./assets/UsersPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index exact element={<LoginPage />} />
          <Route path="Users" exact element={<UsersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
