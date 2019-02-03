import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AvatarList from '../avatarList/avatarList';
import ImageAvatar from '../Avatar/Avatar';
import Projects from '../../utils/projectImages';
import MediaCard from '../MediaCard/MediaCard';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin:10,


  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  pointer:{
      cursor:"pointer",
  },
  whiteColor:{
      color:'white',
  }

});
function redirecToGithub(url){
    window.location=url;
    }
function Menu(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <ImageAvatar avatar="avatar"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography gutterBottom variant="display1" component="h2">
           About me
          </Typography>
          <Typography component="p">
          I am hard-working person, passionate about technology since childhood, I strongly believe in
self-taught education for that reason I am constantly learning about new technologies and
trying to improve myself a little bit more every day,I have experience working with mobile and web technologies looking for my projects on github
          </Typography>
       </Paper>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.pointer}>
        <Paper className={classes.paper} onClick={(e)=>{redirecToGithub("https://github.com/jf2028mp")}}>
          <ImageAvatar image="https://inscripciones.utnso.com/images/github-round.png"></ImageAvatar>
          <Typography gutterBottom variant="display1" component="h2" justify="center" >
            Github
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.pointer}>
        <Paper className={classes.paper} onClick={(e)=>{redirecToGithub('https://www.linkedin.com/in/jeffry-mart%C3%ADnez-p%C3%A9rez-aaab20175')}}>
          <ImageAvatar image="https://banner2.kisspng.com/20180612/eke/kisspng-linkedin-computer-icons-social-media-logo-5b207e5131c866.5740290115288561452039.jpg"></ImageAvatar>
          <Typography gutterBottom variant="display1" component="h2"justify="center" >
            LinkedIn
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}><Typography component="h6" variant="display2" gutterBottom className={classes.whiteColor}>
          Projects
        </Typography>
        <Divider className={classes.whiteColor} light={true}/>
        </Grid>

         {Projects.map((project,index)=>{
         return <MediaCard project={project} key={index}/>
         })}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography gutterBottom variant="display2" component="h2">
           Technologies
          </Typography>
          <AvatarList/>
          <Typography component="p">
          </Typography>
          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
