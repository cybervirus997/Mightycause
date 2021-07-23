import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
     
      <div className={classes.margin} style={{borderBottom:"2px solid black"}}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <span class="material-icons-outlined">search</span>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search" style={{border:"0px solid transparent"}} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}