import React from "react";
import Box from "@material-ui/core/Box";
import IssueTable from "./issueTable";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import IssueDetails from "./issueDetails";

const customStyles = makeStyles({
  projectDashboard: {},
  description: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
  },
});

const Dashboard = ({ issue }) => {
  const styles = customStyles();
  return (
    <React.Fragment>
      <Box className={styles.projectDashboard}>
        <IssueTable></IssueTable>
      </Box>
      <Paper className={styles.description}>
        <Box component="div">{issue.description}</Box>
        <IssueDetails></IssueDetails>
      </Paper>
    </React.Fragment>
  );
};

const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
