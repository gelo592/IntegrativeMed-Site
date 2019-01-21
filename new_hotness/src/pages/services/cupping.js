import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SubLayout from '../../components/sublayout';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';
import withRoot from '../../components/withRoot';

const styles = theme => ({
  para: {
    lineHeight: 2.2,
    fontSize: 17,
    paddingBottom: 20,
    color: colors.text,
  },
  link: {
    color: colors.imc_blue.light,
  },
  header: {
    marginBottom: theme.spacing.unit * 3,
    color: colors.imc_blue.light,
  }
});
const CuppingPage = ({ classes }) => (
  <Layout>
    <SEO title="Cupping" />
    <SubLayout title={'Cupping'}>
    <Grid container justify='center'>
      <Grid item xs={8}>
    <Typography className={classes.para}>Cupping was developed thousands of years ago and though the techniques have modernized, the original philosophy remains the same to mobilize Qi, the natural healing energy of the body.</Typography>
    <Typography className={classes.para}>Cupping involves placing glass, bamboo or plastic jars on the skin and creating a vacuum by suctioning out the air. The underlying tissue is raised, or sucked, partway into the cup. The purpose of cupping is to enhance circulation, help relieve pain, remove "heat" and pull out the toxins that linger in your body's tissues.</Typography>
    <Typography className={classes.para}>Usually there is a tight sensation in the area of the cup. Often, this sensation is relaxing and quite pleasant. Depending on your comfort and your practitioner's assessment of the problem, cups may be moved around or left in place. They may remain on your body briefly or for longer amounts of time. Each treatment is unique to you on that particular day. One very common area to be cupped is the back, although cups work well on other areas, too - particularly on fleshy sections of the body.</Typography>
    <Typography className={classes.para}>Cupping causes the skin to temporarily turn red, blue or purple, especially if there is an injury or energetic blockage under the area that was cupped. The skin discoloration can last anywhere from a few days to a couple of weeks, but is rarely painful. Once the marks have cleared, the procedure can be repeated until the condition is resolved.</Typography>
    </Grid>
    </Grid>
  </SubLayout>
  </Layout>
)

export default withRoot(withStyles(styles)(CuppingPage))
