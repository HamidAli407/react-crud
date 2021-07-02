import React from 'react';
import useStyles from './TasksStyles';
import { Box, Grid } from '@material-ui/core';

export default function Tasks() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box className={classes.taskBox}>
                    <Box p={4}>
                          Tasks
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
