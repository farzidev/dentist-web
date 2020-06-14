import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./ScrollableTabs.css";
import AppointmentTimings from "../../AppointmentTimes/Appointments";
import moment from "moment";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      color="black"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.dateHandler(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className="app-bar" position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        //   aria-label="scrollable auto tabs example"
        >
          <Tab label={moment().format("Do MMM YYYY")} {...a11yProps(0)} />how to pass down handler functions in react
          <Tab label={moment().add(1, 'days').format("Do MMM YYYY").toString()} {...a11yProps(1)} />
          <Tab label={moment().add(2, 'days').format("Do MMM YYYY").toString()} {...a11yProps(2)} />
          <Tab label={moment().add(3, 'days').format("Do MMM YYYY").toString()} {...a11yProps(3)} />
          <Tab label={moment().add(4, 'days').format("Do MMM YYYY").toString()} {...a11yProps(4)} />
          <Tab label={moment().add(5, 'days').format("Do MMM YYYY").toString()} {...a11yProps(5)} />
          <Tab label={moment().add(6, 'days').format("Do MMM YYYY").toString()} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AppointmentTimings {...props.DoctorDataNested.doctor_slots[0][0]} timeHandler={props.timeHandler} docId={props.DoctorDataNested.doctor_info.id} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AppointmentTimings {...props.DoctorDataNested.doctor_slots[1][0]} timeHandler={props.timeHandler} docId={props.DoctorDataNested.doctor_info.id} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AppointmentTimings {...props.DoctorDataNested.doctor_slots[2][0]} timeHandler={props.timeHandler} docId={props.DoctorDataNested.doctor_info.id} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AppointmentTimings {...props.DoctorDataNested.doctor_slots[3][0]} timeHandler={props.timeHandler} docId={props.DoctorDataNested.doctor_info.id} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AppointmentTimings {...props.DoctorDataNested.doctor_slots[4][0]} timeHandler={props.timeHandler} docId={props.DoctorDataNested.doctor_info.id} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AppointmentTimings {...props.DoctorDataNested.doctor_slots[5][0]} timeHandler={props.timeHandler} docId={props.DoctorDataNested.doctor_info.id} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AppointmentTimings {...props.DoctorDataNested.doctor_slots[6][0]} timeHandler={props.timeHandler} docId={props.DoctorDataNested.doctor_info.id} />
      </TabPanel>
    </div>
  );
}
