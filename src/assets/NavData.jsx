import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import { FaHome, FaDatabase } from "react-icons/fa";
import { BiTransfer, BiUserX } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { TiGroup } from "react-icons/ti";
import { HiOutlineUsers } from "react-icons/hi";
import { VscSettings } from "react-icons/vsc";
import { RiUserSettingsLine } from "react-icons/ri";
import {
  AiOutlineDatabase,
  AiOutlineBarChart,
  AiOutlineEye,
} from "react-icons/ai";
import { FiUserCheck, FiUserX, FiDivideCircle } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaScroll,
} from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import fee from "../assets/images/fee.png";
import loan from "../assets/images/loan.png";
import service from "../assets/images/service.png";
import system from "../assets/images/system.png";
import SplitButton from "./SplitButton";
import { TextField } from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";

// const labelStyle = {
//   label: {
//     // Define your styles for the label here
//     fontFamily: "Work Sans",
//   },
// };

// function StyledTextField(props) {
//   const { classes } = props;
//   return (
//     <TextField
//       label="email"
//       InputLabelProps={{
//         className: classes.label,
//       }}
//       // Other props go here
//     />
//   );
// }

// export default withStyles(labelStyle)(StyledTextField);

// InputLabelProps={{
//   style: {
//     color: 'red'
//   }
// }}

const styles = {
  height: "25px",
};
export const Header = [
  {
    icon: <BusinessCenterIcon />,
    name: "Switch Organization",
    icon1: <ExpandMoreIcon />,
  },
  {
    icon: <FaHome style={styles} />,
    name: "Dashboard",
  },
  {
    icon: <HiOutlineLogout />,
    name: "Logout",
  },
  {
    name: "v1.2.0",
  },
];

export const subHeader = ["CUSTOMERS", "BUSINESSES", "SETTINGS"];

export const contents = [
  {
    icon: <GroupIcon sx={{ width: "16px" }} />,
    name: "Users",
  },
  {
    icon: <TiGroup style={styles} />,
    name: "Guarantors",
  },
  {
    icon: (
      <img src={loan} alt={"loan"} style={{ width: "16px", height: "16px" }} />
    ),
    name: "Loans",
  },
  {
    icon: <FaRegHandshake style={styles} />,
    name: "Decision Models",
  },
  {
    icon: <FaPiggyBank style={styles} />,
    name: "Savings",
  },
  {
    icon: <FaHandHoldingUsd style={styles} />,
    name: "Loan Requests",
  },
  {
    icon: <FiUserCheck style={styles} />,
    name: "Whitelist",
  },
  {
    icon: <FiUserX style={styles} />,
    name: "Karma",
  },
  {
    icon: <BusinessCenterIcon />,
    name: "Organization",
  },
  {
    icon: <FaHandHoldingUsd />,
    name: "Loan Products",
  },
  {
    icon: <MdOutlineProductionQuantityLimits />,
    name: "Savings Products",
  },
  {
    icon: <img src={fee} alt={"fee"} />,
    name: "Fees and Charges",
  },
  {
    icon: <BiTransfer />,
    name: "Transactions",
  },

  {
    icon: <img src={service} alt={"service"} />,
    name: "Fees and Charges",
  },
  {
    icon: <RiUserSettingsLine />,
    name: "Service Account",
  },
  {
    icon: <FaScroll />,
    name: "Settlements",
  },
  {
    icon: <AiOutlineBarChart />,
    name: "Reports",
  },
  {
    icon: <VscSettings />,
    name: "Preferences",
  },
  {
    icon: <FiDivideCircle />,
    name: "Fees and Pricing",
  },
  {
    icon: <AiOutlineDatabase />,
    name: "Audit Logs",
  },
  {
    icon: <img src={system} alt={"system"} />,
    name: "Systems Message",
  },
];

export const userSummaryData = [
  {
    icon: <HiOutlineUsers />,
    name: "users",
    number: "2,453",
    style: { color: "#DF18FF", background: "rgba(223, 24, 255, .2)" },
  },
  {
    icon: <TiGroup />,
    name: "Active users",
    number: "2,453",
    style: { color: "#5718FF", background: "rgba(87, 24, 255, .2)" },
  },
  {
    icon: <TbNotes />,
    name: "users with loans",
    number: "12,453",
    style: { color: "#F55F44", background: "rgba(245, 95, 68, .2)" },
  },
  {
    icon: <FaDatabase />,
    name: "users with savings",
    number: "102,453",
    style: { color: "#FF3366", background: "rgba(255, 51, 102, .2)" },
  },
];

export const popOverData = [
  {
    icon: <AiOutlineEye style={{ width: "20.1px", height: "18px" }} />,
    name: "View Details",
  },
  {
    icon: <BiUserX style={{ width: "20.1px", height: "18px" }} />,
    name: "Blacklist User",
  },
  {
    icon: <FiUserCheck style={{ width: "20.57px", height: "18px" }} />,
    name: "Activate User",
  },
];

export const popOverData2 = [
  {
    name: "Organization",
    textField: <SplitButton />,
  },
  {
    name: "Username",
    textField: (
      <TextField
        size="small"
        type={"text"}
        id="outlined-basic"
        label="User"
        variant="outlined"
        sx={{
          background: "#FFFFFF",
          borderRadius: "8px",
        }}
      />
    ),
    // textField: <StyledTextField />,
  },
  {
    name: "Email",
    textField: (
      <TextField
        size="small"
        type={"email"}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{
          background: "#FFFFFF",
          borderRadius: "8px",
        }}
      />
    ),
  },
  {
    name: "Date",
    textField: <BasicDatePicker style={{ border: "1px solid red" }} />,
  },
  {
    name: "Phone Number",
    textField: (
      <TextField
        size="small"
        type={"text"}
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        sx={{
          background: "#FFFFFF",
          borderRadius: "8px",
        }}
      />
    ),
  },
  {
    name: "Status",
    textField: <SplitButton />,
  },
];

export const BootstrapButton = styled(Button)({
  width: "98px",
  height: " 40px",
  border: "1px solid #545F7D",
  borderRadius: "8px",
  background: "#E5E5E5",
  fontfamily: "Work Sans",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16px",
  textTransform: "capitalize",
  color: "#545F7D",

  fontFamily: [
    "-apple-system",
    "Work Sans",
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
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
export const BootstrapButton1 = styled(Button)({
  width: "98px",
  height: " 40px",
  border: "1px solid #545F7D",
  borderRadius: "8px",
  background: "#39CDCC",
  fontfamily: "Work Sans",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16px",
  textTransform: "capitalize",
  color: "#545F7D",

  fontFamily: [
    "-apple-system",
    "Work Sans",
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
    backgroundColor: "#E5E5E5",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
export const BootstrapButton2 = styled(Button)({
  height: " 40px",
  borderRadius: "8px",
  fontfamily: "Work Sans",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16px",
  textTransform: "uppercase",
  color: "#E4033B",
  width: "170px",
  border: "1px solid #E4033B",
  borderRadius: "8px",
  fontFamily: [
    "-apple-system",
    "Work Sans",
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
    backgroundColor: "rgba(228, 3, 59, .2)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
export const BootstrapButton3 = styled(Button)({
  height: " 40px",
  borderRadius: "8px",
  fontfamily: "Work Sans",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16px",
  textTransform: "uppercase",
  color: "#39CDCC",
  width: "170px",
  border: "1px solid #39CDCC",
  borderRadius: "8px",

  fontFamily: [
    "-apple-system",
    "Work Sans",
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
    backgroundColor: "rgba(57, 205, 204, .2)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const navigation = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

export const clientdata = [
  "Personal Information",
  "Education and Employment",
  "Socials",
  "Guarantor",
  "full name",
  "phone number",
  "email address",
  "bvn",
  "gender",
  "marital status",
  "children",
  "type of residence",
  "level of education",
  "employment status",
  "sector of employment",
  "duration of employment",
  "office email",
  "monthly income",
  "loan repayment",
  "twitter",
  "facebook",
  "instagram",
  "full name",
  "phone number",
  "email address",
  "relationship",
];

export const userdatum = [
  "organization",
  "username",
  "email",
  "phone Number",
  "date joined",
  "status",
];
