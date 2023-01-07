// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { dataContext } from "../App";
// import { useContext } from "react";
// import SimplePopper2 from "./SimplePopper2";
// import SimplePopper from "./SimplePopper";
// import styles from "../styles/bastable.module.scss";
// import { useParams, Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import { Pagination } from "@mui/material";
// import { RiArrowDropDownLine, RiArrowDownSLine } from "react-icons/ri";
// export default function BasicTable() {
//   const { users } = useContext(dataContext);
//   const [pageNumber, setpageNumber] = React.useState(0);

//   const usersperpage = 8;
//   const pagesVisited = pageNumber * usersperpage;

//   const displayUsers = users.slice(pagesVisited, pagesVisited + usersperpage);

//   const pageCount = Math.floor(users.length / usersperpage);
//   const changePage = ({ selected }) => {
//     setpageNumber(selected);
//   };
//   const handleChange = (e, p) => {
//     setpageNumber(p);
//   };
//   const style = {
//     fontFamily: "Work Sans",
//     fontStyle: "normal",
//     fontWeight: 600,
//     fontSize: "12px",
//     lineHeight: "14px",
//     textTransform: "uppercase",
//     color: "#545F7D",
//     cursor: "pointer",
//     // border: "3px solid red",
//     // width: "25%",
//     // display: "flex",
//     // margin: 0,
//   };
//   const style1 = {
//     fontFamily: "Work Sans",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: "14px",
//     lineHeight: "16px",
//     color: "#545F7D",
//     border: "3px solid red",
//     width: "25%",
//     // width: "fit-content",
//     padding: 0,
//     // whiteSpace: "break-word",
//   };

//   return (
//     <div className={styles.wrapper}>
//       <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell >
//                 ORGANIZATION
//                 <SimplePopper2
//                   // style={{
//                   //   display: "inline-block",
//                   //   marginLeft: "3px",
//                   //   // border: "1px solid red",
//                   // }}
//                 />
//               </TableCell>
//               <TableCell align="right">
//                 USERNAME
//                 <SimplePopper2
//                   // style={{ display: "inline-block", marginLeft: "3px" }}
//                 />
//               </TableCell>
//               <TableCell align="right">
//                 EMAIL
//                 <SimplePopper2
//                   // style={{ display: "inline-block", marginLeft: "3px" }}
//                 />
//               </TableCell>
//               <TableCell align="right">
//                 PHONE NUMBER
//                 <SimplePopper2
//                   // style={{ display: "inline-block", marginLeft: "3px" }}
//                 />
//               </TableCell>
//               <TableCell align="right">
//                 DATE JOINED
//                 <SimplePopper2
//                   // style={{ display: "inline-block", marginLeft: "3px" }}
//                 />
//               </TableCell>
//               <TableCell align="right">
//                 STATUS
//                 <SimplePopper2
//                   // style={{ display: "inline-block", marginLeft: "3px" }}
//                 />
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {displayUsers.map((row) => (
//               <Link
//                 style={{ textDecoration: "none" }}
//                 key={row.id}
//                 to={`userdetails/${row.id}`}
//                 className={styles.link}
//               >
//                 <TableRow
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     <p>{row.orgName}</p>
//                   </TableCell>
//                   <TableCell>{row.userName}</TableCell>
//                   <TableCell>{row.education.officeEmail}</TableCell>
//                   <TableCell>{row.phoneNumber}</TableCell>
//                   <TableCell>{row.createdAt}</TableCell>
//                   <TableCell>
//                     {row.profile.gender}
//                     <SimplePopper style={{ width: 0 }} />
//                   </TableCell>
//                 </TableRow>
//               </Link>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div className={styles.pagination}>
//         <p>
//           Showing
//           <span>
//             {pageNumber}
//             <RiArrowDownSLine style={{ display: "inline-flex" }} />{" "}
//           </span>
//           out of 12
//         </p>
//         <Pagination
//           count={pageCount}
//           size="small"
//           onChange={handleChange}
//           shape="rounded"
//           className={styles.page}
//           // showFirstButton
//           // showLastButton
//           // color="primary"
//         />
//       </div>
//     </div>
//   );
// }

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
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };
  const handleChange = (e, p) => {
    setpageNumber(p);
  };
  return (
    <div className={styles.wrapper}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="large" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.tablecell}>
                ORGANIZATION <SimplePopper2  />
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                USERNAME
                <SimplePopper2 />
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                EMAIL
                <SimplePopper2 />
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                PHONE NUMBER
                <SimplePopper2 />
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                DATE JOINED
                <SimplePopper2 />
              </TableCell>
              <TableCell className={styles.tablecell} align="left">
                STATUS
                <SimplePopper2 />
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
                <TableCell  align="left">
                  <Link className={styles.link} to={`userdetails/${row.id}`}>
                    {row.profile.gender}
                  </Link>
                  <SimplePopper style={{ width: 0 }} />
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
