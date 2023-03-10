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
import { useEffect } from "react";
import UserDetails from "./assets/UserDetails";
import BasicTable from "./assets/BasicTable";
import useLocalStorage from "./assets/useLocalStorage";

export const dataContext = createContext("");
function App() {
  const [openNav, setopenNav] = useState(false);
  const [users, setusers] = useState();
  const fetchData = async () => {
    try {
      const url =
        " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ";
      const response = await fetch(url);
      const data = await response.json();
      setusers(data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleMenu = () => {
    setopenNav((prev) => !prev);
  };

  const [currentUser, setcurrentUser] = useLocalStorage("currentUser", false);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <div>
      <Router>
        <dataContext.Provider
          value={{
            openNav,
            setopenNav,
            handleMenu,
            users,
            setusers,
            currentUser,
            setcurrentUser,
            // handleClick,
          }}
        >
          <Routes>
            <Route index exact element={<LoginPage />} />
            {/* <Route path="table" exact element={<BasicTable />} /> */}
            <Route
              path="/users"
              element={
                // <RequireAuth>
                  <UsersPage />
                // </RequireAuth>
              }
            >
              <Route path="userdetails/:id" element={<UserDetails />} />
            </Route>
          </Routes>
        </dataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
