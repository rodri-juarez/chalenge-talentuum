import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  div: {
    width: 250,
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    background: "rgb(0, 200, 200)",
  },
}));

const ButtonIngresar = ({getData}) => {
  
  const classes = useStyles();
  return (
    <div className={classes.div}>
    <Button variant="contained" onClick={()=> getData()} className={classes.button}>
      INGRESAR
    </Button>
    </div>
  );
};

export default ButtonIngresar;