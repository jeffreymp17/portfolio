import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import profile from '../../images/me.jpg';
const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 300,
    height: 300,
    borderColor:"white",
    borderWidth:4,
  },
  smallAvatar:{
  height:80,
  width:80,
  },
  nameColor:{
      color:"white",
  }
};

function ImageAvatar(props) {
  const { classes } = props;
  const avatar=props.avatar;
  const icon=props.image;
  if(avatar==="avatar"){
  return (
      <div>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="R" src={profile} className={classes.bigAvatar} />
      <Typography gutterBottom variant="h4" component="h2" className={classes.nameColor}>
            {`Jeffry Martínez Pérez`}
          </Typography>
    </Grid>
        <Grid>
            </Grid>
            </div>

  );
}else{
    return(
    <Avatar alt="R" src={icon} className={classes.smallAvatar} />)
}
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
