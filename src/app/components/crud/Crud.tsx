import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';
import * as Yup from "yup";
import Box from '@material-ui/core/Box';
import {TextField} from 'formik-material-ui';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from 'formik-material-ui';
import useStyles from './CrudStyle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormattedDate } from 'react-intl';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// interface IProps{
//     name: String,
//     setName: Fu
// }


export default function Crud() {
    const classes:any = useStyles({});
    const [userList, setUserList]:any = React.useState([]);
    const [updateItem, setUpdateItem]:any = React.useState();
    const [addNew, setAddNew]:any = React.useState(true);
    const [sortedArr, setSortedArr]:any = React.useState(true);
    
    useEffect(() => {
        if(userList.length>0){
            let oldArr = [...userList];
            setSortedArr(oldArr);
        }
    },[userList]);

    const deleteItem = (id:any) => {
        setUserList(userList.filter((val:any) => val.id !== id));
        handleClick({ vertical: 'bottom', horizontal: 'left',message:'Record deleted successfully' })
    }

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message:''
    });
    
    const { vertical, horizontal, open, message } = state;

    const handleClick = (newState:any) => {
        console.log(newState)
    setState({ open: true, ...newState });    
    };

    const handleClose = () => {
    setState({ ...state, open: false });
    };


    const bull = <span className={classes.bullet}>•</span>;

    let sortedCars1 = userList.sort((a:any, b:any) => {
        let first = {...a};
        let second = {...b};
        first.date = new Date(a.date).getDate()+'/'+new Date(a.date).getMonth()+'/'+new Date(a.date).getFullYear();
        second.date = new Date(b.date).getDate()+'/'+new Date(b.date).getMonth()+'/'+new Date(b.date).getFullYear();
        console.log(first)
        console.log(second)
        // @ts-ignore
        return new Date(...second.date.split('/').reverse()) - new Date(...first.date.split('/').reverse())
    });

    // console.log(sortedCars1);


    return (

        <div className="crudform">
           
            <Box className={classes.cardDisplay}>
                {userList.slice(0, 4).map((val: any) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{padding: 12}}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Details
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {val.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Box>

            <Box mt={3} className={classes.formWrapper}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Box className={classes.formBox} p={4}>
                        <Formik
                            enableReinitialize={true}
                            initialValues={{
                                name: updateItem ? updateItem.name:'',
                                email: updateItem ? updateItem.email:'',
                                gender1: updateItem ? updateItem.gender1:'',
                                date: updateItem ? updateItem.date:new Date(),
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().required(),
                                email: Yup.string().email().required(),
                                gender1: Yup.string().required("Gender is required"),
                            })}
                            onSubmit={(values:any,{resetForm}:any) => { 
                                console.log(values.date)
                                if(updateItem){
                                    let data:any = [...userList];
                                    let itemIndex = data.findIndex((val:any) => val.id === updateItem.id);
                                    data[itemIndex].name = values.name;
                                    data[itemIndex].email = values.email;
                                    data[itemIndex].gender1 = values.gender1;
                                    data[itemIndex].date = values.date;
                                    setUserList(data);
                                    setUpdateItem(null);
                                    
                                }else{console.log(values);
                                    let data:any = {...values};
                                    //console.log(values);
                                    data.id = userList.length;
                                    setUserList([...userList, data]);
                                    // console.log(data);
                                }
                                handleClick({ vertical: 'bottom', horizontal: 'left',message:updateItem?'Record updated successfully':'Record added successfully' })
                                resetForm();
                                setAddNew(false)
                            }}>
                            {({values, setFieldValue}) => {
                                return(
                                    <Form>
                                        {((userList.length<1) || updateItem || addNew) &&
                                            <div>

                                                <Grid container spacing={3}>
                                                    <Grid item xs={6}>
                                                        <Box mb={3}>
                                                            <Box mb={1}>
                                                                <FormLabel className={classes.formLabel} component="legend" required>Name</FormLabel>
                                                            </Box>
                                                            <TextField
                                                                name="name"
                                                                variant="outlined"
                                                                color="primary"
                                                                size="small"
                                                                className={classes.inputWidth}
                                                                placeholder="Name"
                                                                disabled={false}
                                                                fullWidth
                                                            />
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <Box mb={3}>
                                                            <Box mb={1}>
                                                                <FormLabel className={classes.formLabel} component="legend">Email *
                                                                </FormLabel>
                                                            </Box>
                                                            <Box mt={1}>
                                                                <TextField
                                                                    name="email"
                                                                    variant="outlined"
                                                                    color="primary"
                                                                    size="small"
                                                                    className={classes.inputWidth}
                                                                    placeholder="Email"
                                                                    disabled={false}
                                                                    fullWidth
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={3}>
                                                    <Grid item xs={6}>
                                                        <Box mb={3}>
                                                            <Box mb={2}>
                                                                <FormLabel className={classes.formLabel} component="legend">Gender *
                                                                </FormLabel>
                                                            </Box>
                                                            <Box mt={1}>
                                                                <RadioGroup className={classes.radiodir} aria-label="gender" defaultValue={values.gender1} name="gender1">
                                                                    <FormControlLabel value="male" control={<Radio color="primary" size="small" />} label="Male" />
                                                                    <FormControlLabel value="female" control={<Radio color="primary" size="small"/>} label="Female" />
                                                                    <FormControlLabel value="other" control={<Radio color="primary" size="small"/>} label="Other" />
                                                                </RadioGroup>
                                                            </Box>
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <KeyboardDatePicker
                                                                disableToolbar
                                                                name="date"
                                                                autoOk={true}
                                                                variant="inline"
                                                                format="MM/dd/yyyy"
                                                                margin="normal"
                                                                id="date-picker-inline"
                                                                label="Select Date"
                                                                value={values.date}
                                                                onChange={(event: any, value: any) => {
                                                                    setFieldValue('date',value)
                                                                }}
                                                                fullWidth
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change date',
                                                                }}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </Grid>
                                                </Grid>

                                                <Grid container direction="row" justify="center" alignItems="center">
                                                    <Box mt={4}>
                                                        <Button color="primary" variant="contained" type="submit">{updateItem?'Update':'Submit'}</Button>
                                                    </Box>
                                                </Grid>
                                            </div>
                                        }
                                    </Form>
                                )
                            }}
                        </Formik>
                        
                        {((userList.length>0) && !updateItem && !addNew) &&

                            <Box mt={4}>
                                <Box  mb={4}>
                                    <Button onClick={() => setAddNew(true)} variant="contained" color="primary">
                                        Add new Record
                                    </Button>
                                </Box>
                                
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow className={classes.tablehead}>
                                                <TableCell align="left">Name</TableCell>
                                                <TableCell align="left">Email</TableCell>
                                                <TableCell align="left">Gender</TableCell>
                                                <TableCell align="left">Date</TableCell>
                                                <TableCell colSpan={2} align="center">Action</TableCell>
                                            </TableRow>
                                        </TableHead>

{/* 
                                        array.sort(function(a,b){
                                            return new Date(b.date) - new Date(a.date);
                                        }); */}


                                        <TableBody>

                                            {userList.map((val:any) => (
                                                <TableRow key={val}>
                                                    <TableCell component="th" scope="row">
                                                        {val.name}
                                                    </TableCell>
                                                    
                                                    <TableCell align="left">{val.email}</TableCell>
                                                    <TableCell align="left">{val.gender1}</TableCell>
                                                    <TableCell align="left">
                                                        <FormattedDate value={val.date}
                                                                day="2-digit" month="numeric" year="numeric"/>
                                                    </TableCell>

                                                    <TableCell align="left">
                                                        <Button size="small" color="primary" variant="contained" onClick={() => setUpdateItem(val)}>Update</Button>
                                                    </TableCell>
                                                    
                                                    <TableCell align="left">
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => deleteItem(val.id)}>Delete</Button>
                                                    </TableCell>
                                                   
                                                </TableRow>

                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        }
                    </Box>
                </Grid>
            </Box>

            <Snackbar
                open={open} 
                autoHideDuration={3000} 
                anchorOrigin={{vertical:'bottom' , horizontal:'left'}}
                onClose={handleClose}
                message={message}
                key={vertical + horizontal}
            />
        </div>
    )
}