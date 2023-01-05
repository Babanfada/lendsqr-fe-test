// import { withStyles } from "@material-ui/core/styles";
import { withStyles } from "@mui/styles";
// import DatePicker from "@material-ui/pickers";
import dayjs from "dayjs";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FcPlanner } from "react-icons/fc";
// import { FcPieChart } from "react-icons/fc";
const styles = {
  //  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  datePicker: {
    // Define your styles here
    width: "210px",
    // border: "1px solid red",
  },
};

function StyledDatePicker(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(dayjs(""));
  return (
    <DatePicker
      className={classes.datePicker}
      CalendarProps={{
        icon: <FcPlanner />,
      }}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      // onChange={(date) => console.log(date)}
      renderInput={(params) => <TextField {...params} size="small" />}

      // Other props go here
    />
  );
}

const StyledDatePickerWithStyles = withStyles(styles)(StyledDatePicker);

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DatePicker
        label="Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      /> */}
      <StyledDatePickerWithStyles />
    </LocalizationProvider>
  );
}

// In your component:
// function MyComponent() {
//   return (
//     <div>
//       {/* Render the existing date picker component */}
//       <DatePicker />
//       {/* Render the styled date picker component */}
//       <StyledDatePickerWithStyles />
//     </div>
//   );
// }

// // import * as React from "react";

// // import TextField from "@mui/material/TextField";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// // import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// // export default function BasicDatePicker() {
// //   const [value, setValue] = React.useState(null);

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <DatePicker
// //         label="Date"
// //         value={value}
// //         onChange={(newValue) => {
// //           setValue(newValue);
// //         }}
// //         renderInput={(params) => <TextField {...params} />}
// //       />
// //     </LocalizationProvider>
// //   );
// // }

// import * as React from "react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import {
//   DateTimePicker,
//   DateTimePickerTabs,
// } from "@mui/x-date-pickers/DateTimePicker";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import AcUnitIcon from "@mui/icons-material/AcUnit";

// const CustomTabs = (props) => (
//   <React.Fragment>
//     <DateTimePickerTabs {...props} />
//     <Box
//       sx={{ backgroundColor: "blueviolet", height: 5, border: "1px solid red" }}
//     />
//   </React.Fragment>
// );

// export default function BasicDatePicker() {
//   const [value, setValue] = React.useState(dayjs("2022-04-07"));
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateTimePicker
//         // label="Date"
//         renderInput={(params) => <TextField {...params} />}
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         hideTabs={true}
//         components={{ Tabs: CustomTabs }}
//         componentsProps={{
//           tabs: {
//             dateRangeIcon: <LightModeIcon />,
//             timeIcon: <AcUnitIcon />,
//           },
//         }}
//       />
//     </LocalizationProvider>
//   );
// }
