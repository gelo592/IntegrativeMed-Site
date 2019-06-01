import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SubLayout from '../../components/sublayout';
import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';
import withRoot from '../../components/withRoot';
import { graphql } from 'gatsby';

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

const TalksPage = ({ classes, data }) => (
  <Layout>
    {console.log(data)}
    <SEO title="talks" />
    <SubLayout title={'Presentations'}>
    <Grid container justify={'center'} spacing={40}>
      <Grid item>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Better Bones Naturally!</Typography>
        <iframe title={'Better Bones Naturally!'} width="560" height="315" src="https://www.youtube.com/embed/5f50YiZ9s74" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>What to Eat and When to Eat It</Typography>
        <iframe title={'What to Eat and When to Eat It'} width="560" height="315" src="https://www.youtube.com/embed/bGcLba8oywY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Fasting for Health, Wellness, and Disease Prevention</Typography>
        <iframe title={'Fasting for Health, Wellness, and Disease Prevention'} width="560" height="315" src="https://www.youtube.com/embed/gurt3OVhnz4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <video style={{ maxWidth: 560}} controls>
          <source src={data.allFile.edges[0].node.publicURL} type="video/mp4" />
        </video> */}
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Alzeihmer's Disease</Typography>
        <iframe title={'Alzeihmer\'s Disease'} width="560" height="315" src="https://www.youtube.com/embed/b615Sknt8eA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Dietary Supplements For Optimal Health!</Typography>
        <iframe title={'Dietary Supplements For Optimal Health!'} width="560" height="315" src="https://www.youtube.com/embed/MqQ5LZ9ueik" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Gut Health Seminar</Typography>
        <iframe title='Gut Health Seminar' width="560" height="315" src="https://www.youtube.com/embed/6qlEbEOk2Nw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>Advanced Prevention For Caridovascular Disease</Typography>
        <iframe title='Advanced Prevention For Caridovascular Disease' width="560" height="315" src="https://www.youtube.com/embed/ygBZP30y0Ew" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>2016 Nutrition Update</Typography>
        <iframe title='2016 Nutrition Update' width="560" height="315" src="https://www.youtube.com/embed/zTLPHkq3BE8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant={'h6'} className={classes.title}>The Gut & Chronic Disease</Typography>
        <iframe title='The Gut & Chronic Disease' width="560" height="315" src="https://www.youtube.com/embed/k8lpAVobDOU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export const query = graphql`
  query PresentationPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "videos" } }) {
      edges {
        node {
          id
          extension
          dir
          modifiedTime
          publicURL
          name
          relativePath
        }
      }
    }
  }
`
export default withRoot(withStyles(styles)(TalksPage))
