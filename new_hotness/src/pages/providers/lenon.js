import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import lenon from '../../images/lenon.jpg'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SubLayout from '../../components/sublayout';
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

const LenonPage = ({ classes }) => (
  <Layout>
    <SEO title="providers" />
    <SubLayout title={'Rachel Lenon, FNP-BC,'}>
    <Grid container justify='center'>
      <Grid item xs={8}>
        <img src={lenon} alt="Rachel Lenon" style={{ float: 'left', borderRadius: 12, width: 130, margin: 10 }} />
        <Typography className={classes.para}>
          <b>Rachel Lenon, FNP-BC,</b> is a family nurse practitioner available to
          provide primary and integrative healthcare to patients of all ages. Rachel
          received her Master of Science in Nursing in the Family Nurse Practitioner
          program at the University of Missouri in 2011. She has completed advanced
          training in integrative and functional medicine including IFM’s (Institute
          of Functional Medicine) Applying Functional Medicine in Clinical Practice,
          Advanced Autoimmune Module, and Functional Medicine in Pediatrics Module.
          She continues on-going advanced training in integrative and functional medicine.
      </Typography>
        <Typography className={classes.para}>
          Rachel's passion for preventative medicine began while working as an RN
          in the Cardiac ICU. It was there she saw firsthand the value of prevention
          and healthy lifestyle to avoid chronic disease. Rachel worked as a nurse
          practitioner in a family medicine clinic, gaining valuable experience in
          treating a wide range of both acute and chronic illnesses.
      </Typography>
        <Typography className={classes.para}>
          Rachel joined the team at the Integrative Medicine Clinic (IMC) in June
          of 2014. Her goal is to provide a holistic approach to healthcare that
          focuses on prevention and looking for the root causes of a patient's
          health concerns, rather than just treating the symptoms. Lifestyle
          modifications such as stress management, regular exercise, nutrient
          dense diet, and quality sleep are foundational aspects of the Integrative
          Medicine approach. She provides to patients of all ages who prefer an
          integrative approach to medicine.
      </Typography>
      </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export default withStyles(styles)(LenonPage)
