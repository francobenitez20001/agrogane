import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import avatar from '../../img/caso-exito.jpg'
import './Exito.css';
const useStyles = makeStyles({
    root: {
      height: "auto",
    },
    media: {
      height: 300,
    },
});
const Exito = ({titulo}) => {
    const classes = useStyles();
    return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
}
 
export default Exito;