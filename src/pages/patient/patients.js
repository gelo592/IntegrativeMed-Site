import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SubLayout from '../../components/sublayout';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';
import withRoot from '../../components/withRoot';
import { graphql } from 'gatsby';

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

const PatientPage = ({ classes, data }) => (
  <Layout>
    <SEO title="New Patient Information" />
    <SubLayout title={'Patients'}>
    <Grid container justify={'center'}>
        <Grid item xs={8}>
        <Typography className={classes.para}> 
        Integrative Medicine is sometimes referred to as "audience participation
        medicine" because to benefit fully from Integrative Medicine it is
        important that you are engaged fully in this healthcare partnership.
      </Typography>
      <Typography className={classes.para}> 
        It is vital to know your health history, daily habits, exercise patterns,
        food choices, sleep schedule, and stressors to zero in on the root cause
        of illness and what changes will lead most effectively to optimal health.
      </Typography>
      <Typography className={classes.para}> 
        This information is coupled with both standard laboratory and advanced
        functional medicine testing to provide a better diagnosis and thus better
        health outcomes. We look to determine the root cause of your condition,
        therefore acting to treat the underlying cause rather than simply treating
        symptoms.
      </Typography>
      <Typography className={classes.para}> 
        There are few quick fixes. Most often it is attention to all of the above
        areas that produces the best and most rapid results, both in prevention
        of disease and restoring health.
      </Typography>
      <Typography className={classes.para}> 
        This is not a traditional provider - patient relationship; rather, it is
        a partnership to improve health, prevent disease and promote optimal
        health. Together we will create an individualized plan to address your
        concerns and embark on a collaborative journey to reclaim your health and vitality.
      </Typography>
      <Typography className={classes.header} variant={'h5'}>New Patient?</Typography>
      <Typography className={classes.para}> Please complete this <a className={classes.link} href={data.allFile.edges[0].node.publicURL}>new patient form</a> and bring it with you to your first appointment.</Typography>
      <Typography className={classes.para}> Please bring your medications and supplements to your appointment.</Typography>
    </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export const query = graphql`
  query PatientPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
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

export default withRoot(withStyles(styles)(PatientPage))
