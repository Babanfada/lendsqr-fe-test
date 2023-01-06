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
import { useParams, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Pagination } from "@mui/material";
export default function BasicTable() {
  const { users } = useContext(dataContext);
  const [pageNumber, setpageNumber] = React.useState(0);

  const usersperpage = 8;
  const pagesVisited = pageNumber * usersperpage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersperpage);
  
  const pageCount = Math.ceil(users.length / usersperpage);
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };
  const style = {
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "14px",
    textTransform: "uppercase",
    color: "#545F7D",
    cursor: "pointer",
    // border: "3px solid red",
    width: "400px",
    // display: "flex",
    // margin: 0,
  };
  const style1 = {
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#545F7D",
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ display: "flex" }}>
            <TableRow>
              <TableCell style={style} align="left">
                <span style={{ border: "1px solid red" }}>ORGANIZATION</span>
                <span>
                  <SimplePopper2
                    style={{
                      display: "inline-block",
                      marginLeft: "3px",
                      border: "1px solid red",
                    }}
                  />
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
            {displayUsers.map((row) => (
              <Link
                style={{ textDecoration: "none" }}
                key={row.id}
                to={`userdetails/${row.id}`}
              >
                <TableRow
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
              </Link>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ border: "1px solid red", display: "red" }}>
        <ReactPaginate
          previousLabel="Prev"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationWrapper"
          previousLinkClassName="Prevbtn"
          nextLinkClassName="nextbtn"
          disabledClassName="disable"
          activeLinkClassName="paginationactive"
        />
        <Pagination
          count={pageCount}
          size="large"
          PageCount={pageCount}
          // onPageChange={changePage}
          onChange={changePage}
        />
      </div>
    </div>
  );
}
