import React from 'react'
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';

const styles = theme => ({
  para: {
    lineHeight: 2.2,
    fontSize: 17,
    paddingBottom: 20,
    color: colors.text,
  }
});

const DietaryArticle = ({ classes }) => (
  <div>

  </div>
)

export default withStyles(styles)(DietaryArticle)