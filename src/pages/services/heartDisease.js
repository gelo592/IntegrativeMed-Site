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

const HeartDiseasePage = ({ classes }) => (
  <Layout>
    <SEO title="Cholestoral & Heart Disease" />
    <SubLayout title={'Cholestoral & Heart Disease'}>
    <Grid container justify='center'>
      <Grid item xs={8}>
    <Typography className={classes.para}>In addition to the classic risk factors for heart disease, we utilize advanced cholesterol panels and inflammation markers, and when necessary advanced imaging, to assess each individual's heart disease risk and to optimize their treatment.</Typography>
    <Typography className={classes.para}>Classic Risk Factors</Typography>
    <Typography className={classes.para}>
      <ul>
        <li>Family History</li>
        <li>Elevated Cholesterol</li>
        <li>Smoking</li>
        <li>Diabetes</li>
        <li>Hypertension</li>
      </ul>
    </Typography>
    <Typography className={classes.para}>Advanced Cholesterol & Inflammation Markers</Typography>
    <Typography className={classes.para}>
      <ul>
        <li>Lipid Particle size and number</li>
        <li>Inflammation markers - CRP, MPO, Fibrinogen</li>
        <li>Homocysteine</li>
        <li>Hemoglobin A-1-C</li>
        <li>Testosterone</li>
      </ul>
    </Typography>
    <Typography className={classes.para}>Advanced Non-Invasive Imaging</Typography>
    <Typography className={classes.para}>
        <ul>
          <li>Carotid Intimal Media Thickness</li>
          <li>Coronary Calcium Scan</li>
        </ul>
    </Typography>
    </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export default withRoot(withStyles(styles)(HeartDiseasePage))
