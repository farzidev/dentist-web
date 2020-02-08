import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./ScrollableTabs.css";
import AppointmentTimings from "./appointmentTime";

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

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab label="Today" {...a11yProps(0)} />
          <Tab label="Tomorrow" {...a11yProps(1)} />
          <Tab label="9th Jan (Sunday)" {...a11yProps(2)} />
          <Tab label="10th Jan (Monday)" {...a11yProps(3)} />
          <Tab label="11th Jan (Tuesday)" {...a11yProps(4)} />
          <Tab label="12th Jan (Wednesday)" {...a11yProps(5)} />
          <Tab label="13th Jan (Thursday)" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AppointmentTimings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AppointmentTimings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AppointmentTimings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AppointmentTimings />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AppointmentTimings />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AppointmentTimings />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AppointmentTimings />
      </TabPanel>
    </div>
  );
}
