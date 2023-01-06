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
import SimplePopper2 from "./SimplePopper2";
import SimplePopper from "./SimplePopper";
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
    cursor: "pointer",
  };
  const style1 = {
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#545F7D",
  };

  const tableStyle = {
    overflow: "auto", // scroll
  };

  return (
    <TableContainer className={styles.wrapper} component={Paper}>
      <Table aria-label="simple table">
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
                <SimplePopper style={{ width: 0 }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
