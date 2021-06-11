import React from 'react';
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

// interface IProps{
//     name: String,
//     setName: Fu
// }

export default function Crud() {
    const classes:any = useStyles({});
    const [userList, setUserList]:any = React.useState([]);
    const [updateItem, setUpdateItem]:any = React.useState();
    const [addNew, setAddNew]:any = React.useState(true);
    
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

    return (

        <div className="crudform">
            <Grid container direction="row" justify="center" alignItems="center">
                <Box mt={4} className={classes.appName}>
                    REACT CRUD APP
                </Box>
            </Grid>

            <Box className={classes.formWrapper} p={8}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Box className={classes.formBox} p={4}>
                        <Formik
                            enableReinitialize={true}
                            initialValues={{
                                name: updateItem ? updateItem.name:'',
                                email: updateItem ? updateItem.email:'',
                                gender1: updateItem ? updateItem.gender1:'',
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().required(),
                                email: Yup.string().email().required(),
                                gender1: Yup.string().required("Gender is required"),
                            })}
                            onSubmit={(values,{resetForm}) => { 
                                if(updateItem){
                                    let data:any = [...userList];
                                    let itemIndex = data.findIndex((val:any) => val.id === updateItem.id);
                                    data[itemIndex].name = values.name;
                                    data[itemIndex].email = values.email;
                                    data[itemIndex].gender1 = values.gender1;
                                    setUserList(data);
                                    setUpdateItem(null)
                                }else{
                                    let data:any = {...values};
                                    data.id = userList.length;
                                    setUserList([...userList, data]);
                                }
                                handleClick({ vertical: 'bottom', horizontal: 'left',message:updateItem?'Record updated successfully':'Record added successfully' })
                                resetForm();
                                setAddNew(false)
                            }}>
                            {({values}) => {
                                return(
                                    <Form>
                                        {((userList.length<1) || updateItem || addNew) &&
                                            <div>
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

                                                <Box mb={3}>
                                                    <Box mb={2}>
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

                                                <Box mb={3}>
                                                    <Box mb={2}>
                                                        <FormLabel className={classes.formLabel} component="legend">Gender *
                                                        </FormLabel>
                                                    </Box>
                                                    <Box mt={1}>
                                                        <RadioGroup aria-label="gender" defaultValue={values.gender1} name="gender1">
                                                            <FormControlLabel value="male" control={<Radio color="primary" size="small" />} label="Male" />
                                                            <FormControlLabel value="female" control={<Radio color="primary" size="small"/>} label="Female" />
                                                            <FormControlLabel value="other" control={<Radio color="primary" size="small"/>} label="Other" />
                                                        </RadioGroup>
                                                    </Box>
                                                </Box>

                                                <Box>
                                                    <Button color="primary" variant="contained" type="submit">{updateItem?'Update':'Submit'}</Button>
                                                </Box>
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
                                                <TableCell colSpan={2} align="center">Action</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {userList.map((val:any) => (
                                                <TableRow key={val}>
                                                    <TableCell component="th" scope="row">
                                                        {val.name}
                                                    </TableCell>
                                                    
                                                    <TableCell align="left">{val.email}</TableCell>
                                                    <TableCell align="left">{val.gender1}</TableCell>

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