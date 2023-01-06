import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import styles from "../styles/simplepopper2.module.scss";
import menu from "../assets/images/menu.png";
import { BootstrapButton, BootstrapButton1, popOverData2 } from "./NavData";
export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <button
        // style={{ border: "1px solid red", display: "inline-table" }}
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        <img src={menu} alt="menu" className={styles.wrapper} />
      </button>
      <Popper style={{ zIndex: 2 }} id={id} open={open} anchorEl={anchorEl}>
        <Box
          className={styles.box}
          sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
        >
          {popOverData2.map((pop, index) => {
            return (
              <div key={index} className={styles.pop}>
                <div className={styles.name}>{pop.name}</div>
                <div className={styles.text}>{pop.textField}</div>
              </div>
            );
          })}
          <div className={styles.btn}>
            <BootstrapButton
              variant="outlined"
              // disableRipple
            >
              Reset
            </BootstrapButton>
            <BootstrapButton1
              variant="contained"
              // disableRipple
            >
              Filter
            </BootstrapButton1>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
