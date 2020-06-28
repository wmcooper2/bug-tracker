import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { changeToBugs } from "../redux/actions";
import { BUG_GRADIENT, BUGS_URL, BUGS_ENDPOINT } from "../utilities/constants";
import { updateIssues } from "../redux/actions";


const customStyles = makeStyles({
  bugButton: { background: BUG_GRADIENT },
  linkStyle: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "black",
    cursor: "pointer",
    textDecoration: "none",
  },
});

const mapStateToProps = ({ issueType, project }) => ({
  issueType,
  project,
});

const mapDispatchToProps = (dispatch) => ({
  bugClick: (project) => {
    dispatch(changeToBugs());
    fetch(`${BUGS_URL}/${project}`)
      .then((response) => response.json())
      .then((results) => dispatch(updateIssues(results)))
      .catch((error) => console.error(error));
  },
});

const BugButton = ({ bugClick, project }) => {
  const classes = customStyles();
  return (
    <Button className={classes.bugButton}>
      <Link
        to={BUGS_ENDPOINT}
        className={classes.linkStyle}
        onClick={() => bugClick(project)}
      >
        Bug
      </Link>
    </Button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BugButton);
