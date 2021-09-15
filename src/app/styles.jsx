import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridMaster: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    height: "96vh",
  },
  divContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%",
  },
  divInput: {
    display: "inline-flex",
    justifyContent: "start",
    width: 250,
  },
  input: {
    height: 15,
    borderRadius: 4,
    width: 160,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 10px 10px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    color: "black",
    fontWeight: "bold",
  },
}));
