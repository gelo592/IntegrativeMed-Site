import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import mchris from '../../images/DrMChrisLink.jpg'
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

const DrlinkPage = ({ classes }) => (
  <Layout>
    <SEO title="providers" />
    <SubLayout title={'M. Chris Link, MD'}>
    <Grid container justify='center'>
      <Grid item xs={8}>
        <img src={mchris} alt="M. Chris Link" style={{ float: 'left', borderRadius: 12, width: 130, margin: 10 }} />
        <Typography className={classes.para}>
          <b>Dr. Link</b> graduated from St Louis University School of Medicine in 1987.
          He completed emergency medicine residency training at the Medical College of Wisconsin
          in 1991 and practiced emergency and trauma medicine for 18 years.
        </Typography>
        <Typography className={classes.para}>
          In 2009 he completed a 2-year integrative medicine fellowship at the University of Arizona
          directed by Dr. Andrew Weil.  Additionally, he has completed advanced training in acupuncture,
          anti-aging medicine, functional medicine, nutrition, and both western and Chinese herbal medicine.
          He opened Integrative Medicine - Natural Healing Alternatives and Medical Acupuncture in 2009.
        </Typography>
        <Typography className={classes.para}>
          He is a respected educator in the field of integrative medicine. He is a clinical instructor
          of integrative medicine in the Capital Region Medical Center Family Medicine Program. He
          lectures frequently on natural approaches to optimizing health. He is a monthly guest on a local radio show
          focusing on health and healing from the natural prospective.
        </Typography>
        <Typography className={classes.para}>
          The Integrative Medicine Clinic emphasizes optimal nutrition and lifestyle to promote health.
          His overarching belief is that with optimal nutrition, exercise, relaxation,
          and restorative sleep, the human body is designed to heal!
        </Typography>
        <Typography className={classes.para}>
          The individualized treatment plan will include nutritional and lifestyle recommendations and, when needed, supportive
          supplements and herbs to optimize health and healing. As necessary, we support the healing process with
          the lowest dose of the safest medications available.
        </Typography>
      </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export default withStyles(styles)(DrlinkPage)
