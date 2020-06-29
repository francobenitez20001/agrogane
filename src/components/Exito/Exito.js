import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      height: 500,
    },
    media: {
      height: 300,
    },
});

const Exito = () => {
    const classes = useStyles();
    return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
}
 
export default Exito;