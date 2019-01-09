import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SubLayout from '../../components/sublayout';
import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';

const styles = theme => ({
  paper: {
    padding: 10,
    marginBottom: 40,
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: colors.imc_blue.main,
    borderBottom: `solid 4px ${colors.imc_blue.light}`,
    marginBottom: 20,
  }
});

const  TalksPage = ({ classes }) => (
  <Layout>
    <SEO title="talks" />
    <SubLayout title={'Presentations'}>
    <Grid container justify={'center'} spacing={40}>
      <Grid item>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Alzeihmer's Disease</Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b615Sknt8eA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Dietary Supplements For Optimal Health!</Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MqQ5LZ9ueik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Gut Health Seminar</Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6qlEbEOk2Nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Advanced Prevention For Caridovascular Disease</Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ygBZP30y0Ew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>2016 Nutrition Update</Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zTLPHkq3BE8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>The Gut & Chronic Disease</Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/k8lpAVobDOU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Paper>
      </Grid>
      {/* <Grid item>
        <Typography>Dr. Link is a highly regarded educator in the area of integrative and functional medicine. He is an avid researcher on the latest health topics. He presents this information in an interesting, enjoyable, and scientifically supported manner.</Typography>
        <Typography>Contact Dr. Link at integrativemedicine@crmc.org for inquiries to present Integrative Medicine topics for your organization.</Typography>
        <Typography>Recent Speaking Engagements</Typography>
        <Typography>Healthy Review, Capital Region Medical Center's Annual Physician CME conference, 2018</Typography>
        <Typography>Literature Review in Integrative Medicine</Typography>
        <Typography>Optimizing Brain Health</Typography>
        <Typography>Integrative Approaches to Improve Bone Density</Typography>
        <Typography>Columbia Missouri Wellness Conference, CoMo – Wellness, May 2018</Typography>
        <Typography>The Beginning of the End of Alzheimer’s disease – Optimize your Brain Health!</Typography>
        <Typography>Missouri Nursing Association, April 2018</Typography>
        <Typography>Nutritional Strategies for Treating Diabetes and Irritable Bowel Syndrome</Typography>
        <Typography>Missouri Osteopathic Association, April 2017</Typography>
        <Typography>Integrative Approaches to Optimize GI Health and the Microbiome</Typography>
        <Typography>Topics from Previous Lectures</Typography>
        <Typography>Overview of Integrative Medicine - Its Growth and Practice Nationally</Typography>
        <Typography>Food as Medicine - An Update on Optimal Nutrition</Typography>
        <Typography>Gastrointestinal Health - Natural Approaches to Improve GI Health</Typography>
        <Typography>Autoimmune Disease - New Perspectives on Cause, Treatment and Prevention</Typography>
        <Typography>The Human Microbiome - The Health Implications of Our GI microflora, from Diabetes to Heart Disease</Typography>
        <Typography>Dietary Supplements - Scientific Basis for Nutritional Supplements</Typography>
        <Typography>Natural Approaches to Optimize Heart Health</Typography>
        <Typography>Detoxification - How, Why, and When to Detoxify</Typography>
        <Typography>Women's Health - Nutrition, Nutraceuticals, Exercise, and Bio-Identical Hormones.</Typography>
        <Typography>Men's Health - Improving Vitality.</Typography>
        <Typography>Low-T, An Integrative Approach - Nutrition, Nutraceuticals, Exercise, and Optimal Hormone Replacement.</Typography>
      </Grid> */}
    </Grid> 
    </SubLayout>
  </Layout>
)

export default withStyles(styles)(TalksPage)
