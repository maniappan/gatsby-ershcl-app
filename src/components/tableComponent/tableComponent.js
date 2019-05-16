import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const TableComponent = props => {
  const { classes, heading, data } = props;
  const displayRows = data.map((row, index) => {
    return (
      <TableRow key={index}>
        <TableCell component="th" align="left" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.area}</TableCell>
        <TableCell align="left">{row.sme}</TableCell>
      </TableRow>
    );
  });

  const displayHeaderColumns = heading.map((element, index) => (
    <TableCell align="left" key={index}>
      {element}
    </TableCell>
  ));
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} padding="dense">
        <TableHead>
          <TableRow>{displayHeaderColumns}</TableRow>
        </TableHead>
        {displayRows}
        <TableBody />
      </Table>
    </Paper>
  );
};

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  heading: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default withStyles(styles)(TableComponent);
