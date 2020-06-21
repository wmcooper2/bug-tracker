import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
import PriorityRadio from "./priorityRadio";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import IssueRadio from "./issueRadio";

import { connect } from "react-redux";
import { updateIssues } from "../redux/actions";
import { DELETE_URL } from "../utilities/constants";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const customStyles = makeStyles({
  bugFeatureBox: { display: "flex" },
  inputStyle: { width: "100%", minWidth: "50vw" },
  textAreaStyle: { resize: "vertical", minWidth: "50vw" },
  issueForm: {
    width: "50vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
  },
  pageTitle: {
    textAlign: "center",
  },
});

const EditIssue = (props) => {
  const styles = customStyles();
  const { closeClick, issue, issueType } = props;
  const name = issue.name !== undefined ? issue.name : undefined;
  const description =
    issue.description !== undefined ? issue.description : undefined;
  const category = issue.category !== undefined ? issue.category : undefined;
  const version = issue.version !== undefined ? issue.version : undefined;
  const id = issue._id !== undefined ? issue._id : undefined;

  // const inputStyle = { width: "100%", minWidth: "50vw" };
  // const textAreaStyle = { resize: "vertical", minWidth: "50vw" };
  // const issueForm = { width: "50vw", marginLeft: "auto", marginRight: "auto", marginTop: "1rem", };

  return (
    <Box className={styles.issueForm}>
      <Typography variant="h3" className={styles.pageTitle}>
        Edit Issue
      </Typography>
      <form
        action="https://wmcooper2.com/issue-tracker-api/add-issue"
        method="POST"
      >
        <FormGroup>
          <Box component="div">
            Name:
            <Input
              variant="outlined"
              name="issueName"
              className={styles.inputStyle}
              defaultValue={name}
            ></Input>
          </Box>

          <Box component="div">
            Category:
            <Input
              variant="outlined"
              name="category"
              className={styles.inputStyle}
              defaultValue={category}
            ></Input>
          </Box>

          <Box component="div">
            Version:
            <Input
              readOnly={true}
              defaultValue={version}
              name="version"
              className={styles.inputStyle}
            ></Input>
          </Box>

          <Box component="div">
            ID:
            <Input
              readOnly={true}
              value={id}
              name="issueid"
              className={styles.inputStyle}
            ></Input>
          </Box>

          <Box className={styles.bugFeatureBox}>
            <Box component="div">
              Type:
              <IssueRadio></IssueRadio>
            </Box>

            <Box component="div">
              Priority:
              <PriorityRadio></PriorityRadio>
            </Box>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box>
            Description:
            <TextareaAutosize
              defaultValue={description}
              name="description"
              className={styles.textAreaStyle}
            ></TextareaAutosize>
          </Box>
        </FormGroup>

        {/* <FormGroup> <Box> <List>Make message list</List> </Box> </FormGroup> */}

        <FormGroup>
          <Box>
            <List>Make similar issues list</List>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box>Make keywords text area</Box>
        </FormGroup>
        <Button variant="contained" color="primary" name="submit" type="submit">
          Submit {issueType}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          name="close"
          onClick={() => closeClick(issue)}
        >
          Close {issueType}
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = ({ issueType, issue }) => ({
  issueType,
  issue,
});

const mapDispatchToProps = (dispatch) => ({
  closeClick: (issue) => {
    fetch(`${DELETE_URL}/${issue._id}`, { method: "POST" });
    dispatch(updateIssues());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIssue);