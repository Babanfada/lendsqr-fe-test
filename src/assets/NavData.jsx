import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import { FaHome } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { TiGroup } from "react-icons/ti";
import { VscSettings } from "react-icons/vsc";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineDatabase, AiOutlineBarChart } from "react-icons/ai";
import { FiUserCheck, FiUserX, FiDivideCircle } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaScroll,
} from "react-icons/fa";
import fee from "../assets/images/fee.png";
import loan from "../assets/images/loan.png";
import service from "../assets/images/service.png";
import system from "../assets/images/system.png";

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
