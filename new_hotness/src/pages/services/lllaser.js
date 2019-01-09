import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SubLayout from '../../components/sublayout';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';

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

const LaserPage = ({ classes }) => (
  <Layout>
    <SEO title="404: Not found" />
    <SubLayout title={'Low-level Laser Therapy'}>
    <Grid container justify='center'>
      <Grid item xs={8}>
    <Typography className={classes.para}>LLLT uses specific wavelengths of light and projects them through the skin to acheive healing benefits and pain relief. It is painless! LLLT causes a photochemical response that leads to a cascade of cellular energy changes that enhance healing and decrease pain.</Typography>
    <Typography className={classes.para}>There are hundreds of scientific studies on LLLT. Several are ongoing at prestigious institutions like Harvard. The device is FDA approved in the United States. It is also approved in Europe and Canada.</Typography>
    <Typography className={classes.para}>The number of treatments required is variable. The faster an injury is treated, the faster it resolves. Typically two or three times weekly is optimal, often achieving considerable improvement in 3-4 weeks.</Typography>
    <Typography className={classes.para}>There are 4 common clinical targets for LLLT:</Typography>
    <Typography className={classes.para}>
    <ol>
      <li>The site of injury to promote healing, remodeling and reduce inflammation</li>
      <li>Lymph nodes to reduce edema and inflammation in the region</li>
      <li>Nerve tissue to induce analgesia or pain relief</li>
      <li>Muscle trigger points to reduce tenderness and relax contracted muscles</li>
    </ol>
    </Typography>
    <Typography className={classes.para}>Examples of conditions treated:</Typography>
    <Typography className={classes.para}>
    <ol>
      <li>Muscular back and neck pain</li>
      <li>Sciatica</li>
      <li>Osteoarthritis and sore joints, e.g., wrist, elbow, shoulder, hip, knee, ankle</li>
      <li>Shingles pain</li>
      <li>Poor wound healing</li>
      <li>Neuropathy of hands and feet</li>
    </ol>
    </Typography>
    </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export default withStyles(styles)(LaserPage)
