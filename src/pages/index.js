import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Button, Divider, Grid, Typography, Paper } from '@material-ui/core';
import logo from '../images/text_logo_w.svg'
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../constants/constants';
import withRoot from '../components/withRoot';
import NewsletterSignup from '../components/newsletterSignup';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  infoSection: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 9,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  sectionWrap: {
    display: 'flex',
    overflow: 'hidden',
  },
  sectionBody: {
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  sectionHeader: {
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
    color: colors.imc_blue.light,
    borderBottom: `solid ${colors.imc_blue.main} 6px`,
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 900,
  },
  para: {
    maxWidth: 280,
    fontSize: 20,
    color: theme.palette.text.primary,
    lineHeight: 2.2,
  },
  link: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.imc_blue.main,
  },
  header: {
    marginBottom: theme.spacing.unit * 2,
    paddingBottom: 3,
    textAlign: 'center',
    color: colors.imc_blue.main,
    borderBottom: `solid ${colors.imc_blue.main} 4px`,
    fontWeight: 900,
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: '20px',
    paddingRight: 4,
  },
  subtext: {
    fontSize: 20,
    textAlign: 'center',
  },
  dividerBlue: {
    margin: `${theme.spacing.unit * 2}px 0`,
    height: 4,
    backgroundColor: colors.imc_blue.main,
  },
  divider: {
    backgroundColor: 'white',
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconInfo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  paperNoFlex: {
    padding: '30px 20px',
    width: '70%',
  },
  paper: {
    padding: '30px 20px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.imc_blue.main,
    color: colors.white,
    fontWeight: 700,
    letterSpacing: 2.2,
    marginTop: 20,
  },
  testimonal: {
    lineHeight: 2.2,
    fontSize: 16,
    padding: '0 18px 18px 22px',
  },
  testimonalWriter: {
    textAlign: 'left',
    color: colors.imc_blue.main,
    paddingLeft: 50,
  },
  quotes: {
    fontSize: 32,
    color: colors.imc_blue.main,
  }
});

class IndexPage extends React.Component {
  state = { renderSignup: false };

  componentDidMount () {
    window.setTimeout(() => this.setState({ renderSignup: true }), 2500);
  }

  _handleCloseSignup = () => {
    this.setState({ renderSignup: false });
  }

  render() {
    let { classes } = this.props;
    return (
      <Layout>
        {this.state.renderSignup && <NewsletterSignup handleClose={this._handleCloseSignup}/>}
        <SEO title="Home" keywords={[]} />
        <div style={{ overflow: 'hidden', position: 'relative', flex: 1 }}>
          <div style={{ position: 'absolute', width: '100%', opacity: .6, top: '-15vw' }}>
            <Image />
          </div>
          <Grid container justify='center' style={{position: 'relative', paddingTop: '3.5vw', paddingBottom: '5vw'}}>
            <Grid item xs={12} style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <img src={logo} alt="Integrative Medicine Clinic" style={{ width: '76%', maxWidth: 800, margin: 10 }} />
              <Button className={classes.button} variant="contained" onClick={() => navigate('/patient/patients')}>New Patients</Button>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <section className={classes.sectionWrap} style={{ backgroundColor: colors.imc_green.light }}>
          <div className={classes.infoSection}>
            <Paper className={classes.paperNoFlex}>
              <Grid container spacing={16} justify={'center'}>
                <Grid item xs={12} md={4}>
                  <Typography className={classes.header} variant={'h5'}>Hours</Typography>
                  <Typography className={classes.subtext}>Monday-Friday</Typography>
                  <Typography className={classes.subtext}>7:30am-4pm</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography className={classes.header} variant={'h5'}>Location</Typography>
                  <Typography className={classes.subtext}>999 Diamond Ridge Suite 201</Typography>
                  <Typography className={classes.subtext}>Jefferson City, MO 65109</Typography>
                  <a href="https://goo.gl/maps/6lP2I" ><Typography style={{ fontSize: 16 }} className={classes.link}>Get Directions</Typography></a>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography className={classes.header} variant={'h5'}>Contact</Typography>
                  <div className={classes.iconInfo}>
                      <Typography className={classes.label}>Clinic:</Typography>
                    <a href={'tel:+15736325585'}>
                      <Typography className={classes.link}>(573) 632-5585</Typography>
                    </a>
                  </div>
                  <div className={classes.iconInfo}>
                      <Typography className={classes.label}>Shoppe:</Typography>
                    <a href={'tel:+5736168899'}>
                      <Typography className={classes.link}>(573) 616-8899</Typography>
                    </a>
                  </div>
                  <div className={classes.iconInfo}>
                    <Typography className={classes.label}>Fax: </Typography>
                    <Typography style={{ paddingLeft: 4 }} className={classes.subtext}>1(844) 736-2971</Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
        </div>
        </section>
        <Divider className={classes.divider} />
        <section className={classes.sectionWrap} style={{ backgroundColor: colors.imc_blue.light }}>
          <div className={classes.sectionBody}>
            <Typography style={{color: 'white'}} className={classes.sectionHeader} variant={'h4'}>what is functional medicine?</Typography>
            <Grid container justify={'center'} spacing={16}>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    A powerful new model for assessment, treatment, and prevention of chronic disease
                  </Typography>
                  </Paper>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    The latest in genetic science, systems biology, and understanding of how environmental and lifestyle factors influence health and disease
                  </Typography>
                  </Paper>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    Predictive, personalized medicine and empowers patients to take an active role in their own health
                  </Typography>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <Divider className={classes.divider} />
        <section className={classes.sectionWrap} style={{ backgroundColor: colors.imc_yellow.light }}>
          <div className={classes.sectionBody}>
            <Typography style={{ color: colors.imc_blue.dark, borderBottom: `solid ${colors.imc_blue.light} 6px` }} className={classes.sectionHeader} variant={'h4'}>what is integrative medicine?</Typography>
            {/* <Typography>
              Functional Medicine is a personalized, systems-oriented model that empowers
              patients and practitioners to achieve the highest expression of health
              by working in collaboration to address the underlying causes of disease.
            </Typography> */}
            <Grid container justify={'center'} spacing={32}>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    A partnership between the patient and the practitioner in the healing process
                  </Typography>
                  </Paper>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    Appropriate use of conventional and alternative methods to facilitate the body's innate healing response
                  </Typography>
                  </Paper>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    Consideration of all factors that influence health, including mind, body, spirit, and community
                  </Typography>
                  </Paper>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    A philosophy that neither rejects conventional medicine nor accepts alternative therapies uncritically
                  </Typography>
                  </Paper>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    Recognition that good medicine should be based in good science, be inquiry driven, and be open to new paradigms
                  </Typography>
                  </Paper>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.item}>
                  <Paper className={classes.paper}>
                  <Typography className={classes.para}>
                    Use of natural, effective, less-invasive interventions whenever possible
                  </Typography>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <Divider className={classes.divider} />
        <section style={{backgroundColor: colors.imc_green.light}}  className={classes.sectionWrap}>
          <div className={classes.sectionBody}>
            <Typography style={{color: 'white'}} className={classes.sectionHeader} variant={'h4'}>food as medicine</Typography>
            <Grid container justify='center'>
              <Grid item xs={10} sm={9} md={6}>
                  <Paper className={classes.paper}>
                  <Typography style={{ fontSize: 20, lineHeight: 2.2 }}>
                    Eating well enhances one's innate healing capacity. A nutrient dense
                    whole food diet has the power to prevent and treat a myriad of illnesses
                    from autoimmune disease, asthma, and eczema to cancer, diabetes,
                    heart disease, and stroke. Using food as medicine it is quite possible
                    to reduce one's dependence on medications.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </section>
        <Divider className={classes.divider} />
        <section className={classes.sectionWrap} style={{ backgroundColor: colors.imc_blue.light }}>
          <div className={classes.sectionBody}>
            {/* <Typography style={{color: 'white'}} className={classes.sectionHeader} variant={'h4'}>testimonals</Typography> */}
            <Grid container justify={'center'} spacing={16}>
              <Grid item xs={10}>
                {/* <div className={classes.item}> */}
                  <Paper className={classes.paper} style={{ alignItems: 'flex-start' }}>
                  <Typography className={classes.testimonal}>
                    "Today I am blessed with good health and an active life because I was led by 
                    friends to Integrative Medicine. I have Crohns disease which had gotten worse 
                    and worse and was quickly becoming debilitating, with flares every month which 
                    required trips to the ER and sometimes overnight stays at the hospital. I knew 
                    my nutrition was terrible but believed I was eating/drinking what I could most 
                    easily digest. After my initial visit with Jonie Hall, Nutrition and Lifestyle 
                    Educator, in May 2017, I was quickly referred to Dr. Chris Link. I did not know 
                    I was consuming foods which were causing more inflammation.  Since I have been 
                    on the proper diet and supplements for my inflammation, I have not had a Crohns 
                    flare for four months. I feel like a new person and my life is no longer 
                    controlled by pain and emergency trips to the bathroom."
                  </Typography>
                  <Typography className={classes.testimonalWriter} variant={'h6'}>
                    ~ Lola Wekenborg
                  </Typography>
                  </Paper>
                {/* </div> */}
              </Grid>
            </Grid>
          </div>
        </section>

      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(IndexPage))