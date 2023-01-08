import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "../styles/login.module.scss";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
// import { app } from "../firebase";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { dataContext } from "../App";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { dataContext } from "../App";
// import CustomizedSnackbars from "./AlertSuccess";
import CustomizedSnackbarsF from "./AlertFailed";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#39CDCC",
  //   borderColor: "#0063cc",
  width: "33.23vw",
  height: "48px",
  borderRadius: "8px",
  // fontFamily: "Avenir Next",
  fontweight: "600",

  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#39CDCC",
    // borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    // backgroundColor: "#0062cc",
    // borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = () => {
    event.preventDefault();
  };

  const { currentUser, setcurrentUser } = useContext(dataContext);
  const [error, seterror] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        <CustomizedSnackbarsF />;
        console.log("there is an error");
      });
  };

  // const { currentUser, setcurrentUser } = useContext(dataContext);
  // const [error, seterror] = React.useState(false);
  // const [email, setemail] = React.useState("");
  // const [password, setpassword] = React.useState("");
  // const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          className={styles.textfield}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "33.23vw", height: "50px", marginBottom: "24px" }}
        />

        <FormControl
          sx={{ width: "33.23vw", height: "50px" }}
          variant="outlined"
          className={styles.textfield}
          required
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <span className={styles.password}>HIDE</span>
                  ) : (
                    <span className={styles.password}>SHOW</span>
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <h1>FORGOT PASSWORD ?</h1>
        <BootstrapButton
          className={styles.textfield}
          variant="contained"
          // disableRipple
          type="submit"
          // onSubmit={handleSubmit}
        >
          LOG IN
        </BootstrapButton>
      </form>
    </div>
  );
};

export default Login;
