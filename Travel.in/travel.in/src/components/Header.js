import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Avatar } from '@material-ui/core';
import Typed from "react-typed";
import avatar from "../avatar.png";

//CSS
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(21.8),
        height: theme.spacing(21.8),
        margin: theme.spacing(1)
    },
    title: {
        color: '#ffff',
        fontFamily:"Nunito"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
         <Avatar src={avatar} alt="Travel" className={classes.avatar}/>
            </Grid>
         <Typography variant="h2" className={classes.title}>
            <Typed 
            strings={["Travel.in"]} 
            typeSpeed={40} 
            backSpeed={60}
            loop
            />
         </Typography>
        </Box>
    )
}

export default Header
