import React from "react";
import "./EditDelete.css";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

//utilized material ui code below
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

export default function EditDelete() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <Grid item xs={8}>
          <DeleteIcon className="Icon" /> <EditIcon className="Icon" />
        </Grid>
      </Grid>
    </Grid>
  );
}
