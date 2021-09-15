import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import DataGrid from "./datagrid.jsx";
import Grid from "@material-ui/core/Grid";
import Form from "./form.jsx";
import ButtonIngresar from "./buttonIngresar.jsx";
import { useData } from "../utils/useData.jsx";
import { useStyles } from "./styles.jsx";
import { typeResource } from "./typeResource.jsx";

function App() {
  const classes = useStyles();
  const {
    recurso,
    recursos,
    upgradeResource,
    handleChange,
    deleteResource,
    getData,
    showDataGrid
  } = useInput();

  return (
    <Grid className={classes.gridMaster}>
      <div className={classes.divContainer}>
        {recurso && (
          <div className={classes.divInput}>
            <input
              onChange={(event) => {
                upgradeResource(event);
              }}
              type="number"
              min="1"
              className={classes.input}
              id="input-cantidad"
            ></input>

            <InputLabel
              className={classes.label}
              htmlFor="input-cantidad"
            >
              {recurso.unidad}
            </InputLabel>
          </div>
        )}
        <Form
          recurso={recurso}
          handleChange={handleChange}
          typeResource={typeResource}
        />

        {recurso && <ButtonIngresar getData={getData} />}
      </div>
      <Grid className={classes.grid}>
        {showDataGrid && (
          <DataGrid deleteResource={deleteResource} recursos={recursos} />
        )}
      </Grid>
    </Grid>
  );
}

export default App;
