import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
     
      <div className={classes.margin} >
        <Grid container spacing={0} alignItems="flex-end">
          <Grid item>
            <span class="material-icons-outlined">search</span>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search" style={{ paddingBottom: "6%" }}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}