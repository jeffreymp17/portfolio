
import images  from '../../utils/images';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  item:{
      width:200,
  }
});

function AvatarList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {images.map((technology,index) => {
          return <GridListTile key={index} className={classes.item}>
            <img src={technology.image} alt={`Jeffry Martínez Pérez`}/>
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}/>
          </GridListTile>
        })}
      </GridList>
    </div>
  );
}




AvatarList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvatarList);

