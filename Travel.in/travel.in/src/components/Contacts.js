import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles (theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute", 
    },
    button: {
        marginTop: "1rem",
        color: "#46c848",
        borderColor: "#ffff"
    }
}))
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#e4ded3",
        },
        "& label": {
            color: "#ffff"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#46c848",
            },
            "&:hover fieldset":{
                borderColor: "#46c848",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#46c848"
            }, 
        },
    },
})(TextField);

const Contacts = () => {
    const classes = useStyles();
    return (
        <Box component="div" style={{background:"#233", height: "100vh"}}>
            <Navbar/>
          <Grid container justify="center">
            <Box component="form" className={classes.form}>
             <Typography variant="h5" style={{color: "#ffff", textAlign: "center", textTransform:"uppercase"}}> Looking For Our Help? </Typography>
             <InputField 
             fullWidth = {true} 
             label = "Email" 
             variant = "outlined" 
             margin="dense" 
             size="medium"
             inputProps={{style:{ color: "white" }}}  />
             <br/>
             <InputField 
             fullWidth = {true} 
             label = "Name" variant = "outlined" 
             margin="dense" 
             size="medium"
             inputProps={{style:{ color: "white" }}} />
             <br/>
             <InputField 
             fullWidth = {true} 
             label = "Question" 
             variant = "outlined" 
             margin="dense" 
             size="medium"
             inputProps={{style:{ color: "white" }}} />
             <br/>
             <Button variant="outlined" fullWidth={true} endIcon={<SendRoundedIcon/>} className={classes.button}>
                 Send
             </Button>
            </Box>
          </Grid>
        </Box>
    )
}

export default Contacts
