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

const FunctionalMedPage = ({ classes }) => (
  <Layout>
    <SEO title="Functional Medical Testing" />
    <SubLayout title={'Functional Medical Testing'}>
    <Grid container justify='center'>
      <Grid item xs={8}>
    <Typography className={classes.para}>Advanced functional medicine testing goes beyond standard laboratory testing. These tests offer a more detailed look at an individuals unique biological characteristics, nutritional needs, inflammatory and oxidative stress, and genetics. This "closer look" provides the foundation for a personalized approach for nutrition, lifestyle, and supplements needed to best improve health and prevent disease.</Typography>
    <Typography className={classes.para}>Advanced tests offered:</Typography>
    <Typography className={classes.para}>
      <ul>
        <li>Food sensitivities</li>
        <li>Nutritional assessment of vitamins, minerals, aminoacids, and dietary fats</li>
        <li>Stool analysis of digestion, GI bacteria, yeast and parasites</li>
        <li>Small Intestinal Bacterial Overgrowth - SIBO breath test</li>
        <li>Hormone evaluation for men and women</li>
        <li>Adrenal Stress Index</li>
        <li>Heavy metal analysis</li>
        <li>Advanced cholesterol risk assessment</li>
        <li>Autoimmune evaluation</li>
        <li>Complete thyroid profile</li>
        <li>Inflammatory and oxidative stress markers</li>
        <li>Telomere length</li>
      </ul>
    </Typography>
    </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export default withStyles(styles)(FunctionalMedPage)
