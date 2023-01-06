import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dataContext } from "../App";
import { useContext } from "react";
import menu from "../assets/images/menu.png";
import dot from "../assets/images/dot.png";
// import { RxDotsVertical } from "react-icons/rx";
// import BasicPopover from "./SimplePopper";
import SimplePopper2 from "./SimplePopper2";
import SimplePopper from "./SimplePopper";
import { Button } from "@mui/material";
import { userdatum } from "./NavData";
// import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
{
  /* <img src={menu} alt="menu" /> */
}
import styles from "../styles/bastable.module.scss";
export default function BasicTable() {
  const { users, setusers, handleClick } = useContext(dataContext);
  const myClickHandler = () => {
    console.log("click");
  };
  const someUsers = users.slice(0, 8);
  const style = {
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "14px",
    textTransform: "uppercase",
    color: "#545F7D",
    // display: "grid",
    // flexDirection: "row",
    // border: "1px solid red",
    cursor: "pointer",
  };
  const style1 = {
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    // textTransform: "uppercase",
    color: "#545F7D",
    // border: "1px solid red",
    // zIndex: 4,
    // cursor: "pointer",
  };

  const tableStyle = {
    overflow: "auto", // scroll
  };

  return (
    <div style={{ display: "grid" }}>
      <TableContainer
        className={styles.wrapper}
        style={tableStyle}
        component={Paper}
      >
        <Table
          onClick={myClickHandler}
          sx={{
            minWidth: 650,
            overflow: "scroll",
            // background: "pink",
            // border: "1px solid rgba(33, 63, 125, 0.06)",
            // boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
            // borderRadius: "4px",
            // width: "1137px",
          }}
          aria-label="simple table"
          // style={{ width: 500, overflowX: "auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell style={style} align="left">
                <span>
                  ORGANIZATION <SimplePopper2 />
                </span>
              </TableCell>
              <TableCell style={style} align="left">
                USERNAME
                <SimplePopper2
                  style={{ display: "inline-block", marginLeft: "3px" }}
                />
              </TableCell>
              <TableCell style={style} align="left">
                EMAIL
                <SimplePopper2
                  style={{ display: "inline-block", marginLeft: "3px" }}
                />
              </TableCell>
              <TableCell style={style} align="left">
                PHONE NUMBER
                <SimplePopper2
                  style={{ display: "inline-block", marginLeft: "3px" }}
                />
              </TableCell>
              <TableCell style={style} align="left">
                DATE JOINED
                <SimplePopper2
                  style={{ display: "inline-block", marginLeft: "3px" }}
                />
              </TableCell>
              <TableCell style={style} align="left">
                STATUS
                <SimplePopper2
                  style={{ display: "inline-block", marginLeft: "3px" }}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {someUsers.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={style1} component="th" scope="row">
                  {row.orgName}
                </TableCell>
                <TableCell style={style1} align="left">
                  {row.userName}
                </TableCell>
                <TableCell
                  style={{
                    style1,
                    textTransform: "lowercase",
                    color: "#545F7D",
                  }}
                  align="left"
                >
                  {row.education.officeEmail}
                </TableCell>
                <TableCell style={style1} align="left">
                  {row.phoneNumber}
                </TableCell>
                <TableCell style={style1} align="left">
                  {row.createdAt}
                </TableCell>
                <TableCell style={style1} align="left">
                  {row.profile.gender}
                  {/* <img src={dot} alt="menu" style={{ float: "right" }} /> */}

                  <SimplePopper />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export const BasTable = () => {
  return (
    <div>
      {userdatum.map((datum, index) => {
        return <div key={index}>{datum}</div>;
      })}
    </div>
  );
};
