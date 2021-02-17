import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { 
    Box,
    Card,
    Grid,
    Button,
    Typography,
    CardActions,
    CardContent,
    CardMedia,
    CardActionArea
 } from "@material-ui/core";
import Navbar from './Navbar';
import island1 from '../images/island1.jpg';
import island2 from '../images/island2.jpg';
import island3 from '../images/island3.jpg';
import island4 from '../images/island4.jpg';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "200%"

    },
    cardContainer: {
        maxWidth: 340,
        height: 347,
        margin: "5rem auto"
    },
    Title: {
        fontFamily: "Nunito",
        color: "#1d1d1d"
    },
    Subtitle: {
        fontFamily: "sans-serif"
    }
})

const Booking = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
        <Navbar />
            <Grid container justify="center" alignItems="center" >
              {/* Island 1 */}
              <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        alt="island1"
                        height="140"
                        image={island1}
                        />
                     <CardContent>
                      <Typography gutterBottom variant="h5" className={classes.Title}>
                        Indonesia, Bali
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.Subtitle}>
                        (description)
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small" color="primary">
                             INFO
                         </Button>
                         <Button size="small" color="primary">
                             BOOK
                         </Button>
                     </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            {/* Island 2 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        alt="island2"
                        height="140"
                        image={island2}
                        />
                     <CardContent>
                      <Typography gutterBottom variant="h5" className={classes.Title}>
                        Venice, Italy
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.Subtitle}>
                      (description)
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small" color="primary">
                             INFO
                         </Button>
                         <Button size="small" color="primary">
                             BOOK
                         </Button>
                     </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            {/* Island 3 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        alt="island3"
                        height="140"
                        image={island3}
                        />
                     <CardContent>
                      <Typography gutterBottom variant="h5" className={classes.Title}>
                        Clinque Terre, Italy
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.Subtitle}>
                      (description)
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small" color="primary">
                             INFO
                         </Button>
                         <Button size="small" color="primary">
                             BOOK
                         </Button>
                     </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            {/* Island 4 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        alt="island4"
                        height="140"
                        image={island4}
                        />
                     <CardContent>
                      <Typography gutterBottom variant="h5" className={classes.Title}>
                        Maldives Island
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.Subtitle}>
                      (description)
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small" color="primary">
                             INFO
                         </Button>
                         <Button size="small" color="primary">
                             BOOK
                         </Button>
                     </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            </Grid>
        </Box>
    );
};

export default Booking;
