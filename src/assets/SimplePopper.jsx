import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import dot from "../assets/images/dot.png";
import Button from "@mui/material/Button";
import { popOverData } from "../assets/NavData";
import styles from "../styles/simplepopper.module.scss";
export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div
       className={styles.container}
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        <img src={dot} alt="menu" style={{ float: "right" }} />
      </div>
      <Popper style={{ zIndex: 2 }} id={id} open={open} anchorEl={anchorEl}>
        <Box
          className={styles.wrapper}
          sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
        >
          <div className={styles.div}>
            {popOverData.map((pop, index) => {
              return (
                <div className={styles.div2} key={index}>
                  <span> {pop.icon}</span>
                  <span> {pop.name}</span>
                </div>
              );
            })}
          </div>
        </Box>
      </Popper>
    </div>
  );
}
