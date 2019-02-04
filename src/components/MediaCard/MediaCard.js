import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 50,
      border: 0,
      color: 'white',
      height: 30,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function redirecToGithub(url){
    window.location=url;
    }
function MediaCard(props) {

  const { classes } = props;
  const project=props.project;
  return (
    <Grid item xs={12} sm={6} lg={4} lg={4} xl={4} >
    <Card  onClick={(e)=>{redirecToGithub(project.url)}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography component="p">
           {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledButton  onClick={(e)=>{redirecToGithub(project.url)}}>
          Github
        </StyledButton>
      </CardActions>
    </Card>
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
