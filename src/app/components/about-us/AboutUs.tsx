import React from 'react';
import useStyles from './AboutUsStyle';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export default function AboutUs() {
    const classes:any = useStyles({});
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box className={classes.about}>
                    <Box className={classes.aboutText} p={4}>
                        <Box mb={4}>
                            As AI applications are advancing, we realize many companies strive for large amounts of quality data.
                        </Box>
                       <Box mb={4}>
                            To provide machine learning resources, we built an international creative team. Our goal is to provide customizable data services to support machine learning projects.
                       </Box>
                        <Box>
                            With a MarsFam in over 50 countries, we aim to meet your requirements and tailor our data services to your requests. 
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}