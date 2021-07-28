import React, {useEffect, useState} from 'react';
import useStyles from './TasksStyles';
import { Box, Button, Grid } from '@material-ui/core';

export default function Tasks() {
    const classes = useStyles();

    var [count, setCount]:any = useState(0);
    var [count1, setCount1]:any = useState(50);

    var handleIncrement = () => {
        setCount(count + 1);
    };

    var handleDecrement = () => {
        setCount1(count1 - 1);
    };

    useEffect(()=>{
        console.log("useEffect called");
    },[count]);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box className={classes.taskBox}>
                    <Box p={4}>
                        <h1>Count Up: {count}</h1>
                        <Button color="primary" variant="contained" size="medium" onClick={handleIncrement}>Up</Button>
                        
                        <h1>Count Down: {count1}</h1>
                        <Button color="primary" variant="contained" size="medium" onClick={handleDecrement}>Down</Button>
                    </Box> 
                </Box>
            </Grid>
        </Grid>
    )
}
