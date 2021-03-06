import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";


const customStyles = makeStyles({
    table: { width: "100%", minWidth: "40vw" },
});


const IssuePeople = (props) => {
    const { issue } = props;
    const styles = customStyles();
    const personOpened = issue.people !== undefined ? issue.people.opened : null;
    const personLastEdited =
        issue.people !== undefined ? issue.people.lastEdited : null;
    const personClosed = issue.people !== undefined ? issue.people.closed : null;
    return (

        <Paper>
            <TableContainer className={styles.table}>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2}>

                                <Typography variant="h6">
                                    People:
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        <TableRow>
                            <TableCell>
                                Opened by:
                            </TableCell>
                            <TableCell>
                                {personOpened}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Last edited by:
                            </TableCell>
                            <TableCell>
                                {personLastEdited}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Closed by:
                            </TableCell>
                            <TableCell>
                                {personClosed}
                            </TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
        </Paper >
    );
};

const mapStateToProps = ({ issue }) => ({
    issue,
});

const mapDispatchToProps = () => ({});

IssuePeople.propTypes = {
    issue: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuePeople);
