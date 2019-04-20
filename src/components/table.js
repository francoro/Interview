import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function _calculateAge(birthday) { 
    birthday = new Date(birthday)
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function TablePlayers(props) {
  const { classes } = props;

  const rows = [...props.players];
    rows.map((item) => {
       item.age = _calculateAge(item.dateOfBirth) 
    })
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="left">Player</CustomTableCell>
            <CustomTableCell align="left">Position</CustomTableCell>
            <CustomTableCell align="left">Age</CustomTableCell>
            <CustomTableCell align="left">Nationality</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {

          return(
            <TableRow className={classes.row} key={index}>
              
              <CustomTableCell align="left">{row.name}</CustomTableCell>
              <CustomTableCell align="left">{row.position}</CustomTableCell>
              <CustomTableCell align="left">{row.age}</CustomTableCell>
              <CustomTableCell align="left">{row.nationality}</CustomTableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </Paper>
  );
}

TablePlayers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TablePlayers);
