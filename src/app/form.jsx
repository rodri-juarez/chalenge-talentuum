import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 250,
  },
  input: {
    fontWeight: "bold",
  },
}));

const Form = ({ recurso, handleChange, typeResource }) => {
  var classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      {recurso ? null : (
        <InputLabel className={classes.input} id="select-recursos">
          Selecciona un recurso
        </InputLabel>
      )}
      <Select
        labelId="select-recursos"
        value={recurso ? recurso.name : ""}
        onChange={handleChange}
      >
        {typeResource.map((recurso) => {
          return (
            <MenuItem key={recurso.name} value={recurso.name}>
              {recurso.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Form;
