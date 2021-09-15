import React from "react";
import {
  Button,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table : {
    height: '2rem',
    width: '30%',
    fontWeight:'bold',
    border: 'rgb(175, 175, 175) solid 1px',
    background: 'white',
    textAlign: 'center',
  },
  tableDelete: {
    width: 150,
    height: '2rem',
    fontWeight:'bold',
    border: 'rgb(175, 175, 175) solid 1px',
    background: 'white',
    textAlign: 'center',
  },
  row : {
    height: '2rem',
    width: '30%',
    border: 'rgb(175, 175, 175) solid 1px',
    background: 'white',
    textAlign: 'center',
  },
  buttones: {
    background: "rgb(0, 161, 157)",
  },
}));


export default function DataGrid({ recursos, deleteResource }) {
  var classes = useStyles();
  return (
    <Grid item xs={8}>
      <TableContainer>
        <Table
          padding="checkbox"
          size="small"
          component={Paper}
          stickyHeader={true}
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.table}>RECURSO</TableCell>
              <TableCell className={classes.table} >CANTIDAD</TableCell>
              <TableCell className={classes.table}>FECHA DE INGRESO</TableCell>
              <TableCell className={classes.tableDelete}>ELIMINAR</TableCell>
            </TableRow>
          </TableHead>
          {recursos.map((recurso, i) => {
            const { name, cantidad, unidad, fecha_de_ingreso } = recurso;

            return (
              <TableBody key={i++}>
                <TableRow>
                  <TableCell className={classes.row}>{name}</TableCell>
                  <TableCell className={classes.row}>{`${cantidad} ${unidad}`}</TableCell>
                  <TableCell className={classes.row}>{fecha_de_ingreso}</TableCell>
                  <TableCell className={classes.row}>
                    <Button onClick={() => deleteResource(fecha_de_ingreso)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Grid>
  );
}
