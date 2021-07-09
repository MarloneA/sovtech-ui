import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppTemplate from "../../templates/AppTemplate";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    "& .MuiCircularProgress-colorPrimary": {
      color: "#24e5d8",
    },
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <AppTemplate header={<p>{`Star Wars Characters (-)`}</p>}>
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </AppTemplate>
  );
};

export default Loading;
