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
import { RiArrowDropDownLine, RiArrowDownSLine } from "react-icons/ri";

export default function BasicTable() {
  const { users } = useContext(dataContext);
  const [pageNumber, setpageNumber] = React.useState(0);
  const usersperpage = 8;
  const pagesVisited = pageNumber * usersperpage;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersperpage);
  const pageCount = Math.floor(users.length / usersperpage);
  // const changePage = ({ selected }) => {
  //   setpageNumber(selected);
  // };
  const handleChange = (e, p) => {
    setpageNumber(p);
  };
  const style1 = {
    display: "flex",
    border: "1px solid red",
    // justifyContent: "flex-start",
    justifyContent: "space-between",
    // gap: "1vw",
    width: "150px",
    padding: "10px",
  };
  const style2 = {
    display: "flex",
    border: "1px solid red",
    justifyContent: "space-between",
    alignItems:"center",
    width: "150px",
    padding: "10px",
  };
  const style3 = {
    // border: "1px solid red",
    width: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"30px",
    padding: "20px, 13px",
    // padding: "7px, 13px",
    borderRadius: "20px",
    backgroundColor: "rgba(57, 205, 98, .2)",
    // fontWeight: "400",
    // fontSize: "14px",
    // lineHeight: "16px",
    
  };
  return (
    <div className={styles.wrapper}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="large" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.tablecell}>
                <div style={style1}>
                  <span>ORGANIZATION</span>
                  <span>
                    <SimplePopper2 />
                  </span>
                </div>
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                <div style={style1}>
                  <span> USERNAME</span>
                  <span>
                    <SimplePopper2 />
                  </span>
                </div>
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                <div style={style1}>
                  <span>EMAIL</span>
                  <span>
                    <SimplePopper2 />
                  </span>
                </div>
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                <div style={style1}>
                  <span>PHONE NUMBER</span>
                  <span>
                    <SimplePopper2 />
                  </span>
                </div>
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                <div style={style1}>
                  <span> DATE JOINED</span>
                  <span>
                    <SimplePopper2 />
                  </span>
                </div>
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                <div style={style1}>
                  <span> STATUS</span>
                  <span>
                    <SimplePopper2 />
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayUsers.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={styles.tablerow}
              >
                <TableCell component="th" scope="row">
                  <Link className={styles.link} to={`userdetails/${row.id}`}>
                    {row.orgName}
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Link className={styles.link} to={`userdetails/${row.id}`}>
                    {row.userName}
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Link className={styles.link} to={`userdetails/${row.id}`}>
                    {row.education.officeEmail}
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Link className={styles.link} to={`userdetails/${row.id}`}>
                    {row.phoneNumber}
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Link className={styles.link} to={`userdetails/${row.id}`}>
                    {row.createdAt}
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <div style={style2}>
                    <span style={style3}>
                      <Link
                        style={{
                          color: "rgba(57, 205, 98, 1)",
                          textDecoration: "none",
                        }}
                        // className={styles.link}
                        to={`userdetails/${row.id}`}
                      >
                        {row.profile.gender}
                      </Link>
                    </span>
                    <span>
                      <SimplePopper style={{ width: 0 }} />
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.pagination}>
        <p>
          Showing
          <span>
            {pageNumber}
            <RiArrowDownSLine style={{ display: "inline-flex" }} />{" "}
          </span>
          out of 12
        </p>
        <Pagination
          count={pageCount}
          size="small"
          onChange={handleChange}
          shape="rounded"
          className={styles.page}
        />
      </div>
    </div>
  );
}
