import React from 'react';
import {
  Grid,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BarChart } from '../../components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 500,
  },
  table: {
    minWidth: 650,
  },
}));

function createData(
  name: any,
  calories: any,
  fat: any,
  carbs: any,
  protein: any,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const Dashboard = () => {
  const classes = useStyles();

  const renderChart = (idx: string) => <BarChart key={idx} />;

  const renderCharts = () => (
    <Grid item={true} xs={12}>
      <Grid container={true} justify="center" spacing={10}>
        {['0', '1'].map((value) => (
          <Grid key={value} item={true}>
            <Paper className={classes.paper}>{renderChart(value)}</Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  const renderTable = () => (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      {renderCharts()}
      {renderTable()}
    </div>
  );
};
