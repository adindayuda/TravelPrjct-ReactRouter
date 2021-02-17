import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { 
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    ListItemIcon,
    Divider
} from "@material-ui/core";
import { 
    TocRounded,
    HomeRounded,
    ContactsRounded,
    RoomRounded
 } from "@material-ui/icons";
 

//CSS
const useStyles = makeStyles(theme=>({
    root:{
        display: 'flex',
        fontFamily: 'Nunito',
    },
    menuSliderContainer:{
        width: 250,
        background: "#484949",
        height: "100%"
    },
    colorText: {
        color: '#46c848'
    },
   
    Title: {
        fontFamily: "Nunito",
        fontSize: '1.6rem',
        
    },
    listIcon:{
        color:"#ececec",
        fontFamily: "Nunito"
    },
    appbar: {
        background: 'none',
        
    },
    
    Icon: {
        color:'#fff',
        fontSize: '2rem',
    }
}));

const menuItems = [
    {
        listIcon: <HomeRounded/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <RoomRounded/>,
        listText: "Booking",
        listPath: "/booking"
    },
    {
        listIcon: <ContactsRounded/>,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() =>{
        setChecked(true);
    },[])
    const [state, setState] = useState({
      right: false
    })
    const toggleSlider = (slider, open) => () => {
      setState({...state, [slider]: open});
    };
    const sideList = slider => (
      <Box className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)} >
        <Divider/>
        <List>
            {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.listIcon}> {lsItem.listIcon} </ListItemIcon>
                <ListItemText className={classes.listIcon} primary={lsItem.listText}/>
                </ListItem>
            ))}
        </List>
      </Box>
    )
  
    return (
    <>
    <div className={classes.root} id="header">
        <Box component="nav">
            <AppBar className={classes.appbar} position="static" elevation={0}>
                <Toolbar >
                    <h1 className={classes.Title}> 
                    <span className={classes.colorText}> Travel </span>.in </h1>
                    
                    <IconButton onClick={toggleSlider("right", true)}>
                        <TocRounded className={classes.Icon} style={{color: "#fff"}}/>
                    </IconButton>
                    <MobilRightMenuSlider
                        anchor="right"
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    </>
    )
}

export default Navbar
