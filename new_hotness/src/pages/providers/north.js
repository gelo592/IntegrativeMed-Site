import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import north from '../../images/north.jpg'
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

const NorthPage = ({ classes }) => (
  <Layout>
    <SEO title="providers" />
    <SubLayout title={'Jalyn North, APRN'}>
    <Grid container justify='center'>
      <Grid item xs={8}>
      <img src={north} alt="Jayln North" style={{ float: 'left', borderRadius: 12, width: 130, margin: 10 }} />
      <Typography className={classes.para}>
        <b>Jalyn North, APRN,</b> is a family nurse practitioner available to provide 
        primary and integrative healthcare to patients of all ages. She received 
        her Master of Science in Nursing from Maryville University in 2015. 
        She is board certified by the American Academy of Nurse Practitioners. 
        She has completed advanced training in integrative and functional 
        medicine including IFM’s (Institute of Functional Medicine) Applying 
        Functional Medicine in Clinical Practice. She continues on-going advanced 
        training in integrative and functional medicine.
      </Typography>
      <Typography className={classes.para}>
        Jalyn joins Integrative Medicine Clinic (IMC) with 10 years of experience 
        in the medical field. She most recently served as nurse practitioner for 
        Decatur Medical Group located in Forsyth, Ill., providing primary and acute 
        medical care. Her interest in integrative medicine began while working as 
        a nurse in St. Louis, both in the ER and in ICU, where she saw many 
        chronically ill patients with preventable diseases. Jalyn joined the team 
        at IMC in September of 2017.
      </Typography>
      <Typography className={classes.para}>
        Jalyn grew up in Columbia and graduated from Rock Bridge Senior High. She 
        now resides in Ashland with her husband and three children. In her spare 
        time, she enjoys hiking and being outdoors, spending time with her family, 
        growing her faith, and watching her kids and nephews play sports. Jalyn 
        believes in a holistic approach to medicine. She provides to patients of 
        all ages who prefer an integrative approach to medicine.
      </Typography>
      </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export default withStyles(styles)(NorthPage)
