import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { RiArrowDropDownLine, RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
// import { dataContext } from "../App";
// import { useContext } from "react";

const options = ["Select", "Organization", "Organization"];

export default function SplitButton() {
  // const { users } = useContext(dataContext);
  // const someUsers = users.slice(0, 8);
  // const options = someUsers;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          sx={{
            backgroundColor: "white",
            color: "rgba(84, 95, 125, 1)",
            fontFamily: "Work Sans",
            width: "180px",

            border: "none",
          }}
          onClick={handleClick}
        >
          {options[selectedIndex]}
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "white", border: "none" }}
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <IoIosArrowDown
            color="rgba(33, 63, 125, 1)"
            // sx={{ color: "rgba(33, 63, 125, 1)" }}
          />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
          border: "none",
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
