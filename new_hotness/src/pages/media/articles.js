import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import CoQ10Article from '../articles/coq10';
import SugarArticle from '../articles/sugarDiabetes';
import EatingArticle from '../articles/eatWell';
import GIArticle from '../articles/GIHealth';
import PreventionArticle from '../articles/prevention';
import DietaryArticle from '../articles/dietaryGuidelines';
import { Paper, Typography, Grid, Button } from '@material-ui/core';
import SubLayout from '../../components/sublayout';
import { colors } from '../../constants/constants';
import { withStyles } from '@material-ui/core/styles';

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
  sectionHeaderCenter: {
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
    color: colors.imc_blue.light,
  },
  sectionHeader: {
    marginBottom: theme.spacing.unit * 3,
    color: colors.imc_blue.light,
  }
});

class ArticlesPage extends React.Component {
  state = {
    currentKey: 'coq10'
  };

  _switchArticle = (newKey) => {
    this.setState({ currentKey: newKey });
  }

  render() {
    let articles = {
      'coq10': {
        component: CoQ10Article,
        title: "Congestive Heart Failure",
        download: 'something.pdf',
      },
      'sugar': {
        component: SugarArticle,
        title: "Sugar and Diabetes",
        download: 'something.pdf',
      },
      'eating': {
        component: EatingArticle,
        title: "Eat Well!",
        download: 'something.pdf',
      },
      'gi': {
        component: GIArticle,
        title: "GI Health",
        download: 'something.pdf',
      },
      'prevention': {
        component: PreventionArticle,
        title: "Prevention",
        download: 'something.pdf',
      },
      'dietary': {
        component: DietaryArticle,
        title: "Dietary Guidelines",
        download: 'something.pdf',
      },
    };
    let { currentKey } = this.state;
    let currentArticle = articles[currentKey];
    let Component = currentArticle.component;
    let { classes } = this.props;
    return (<Layout>
      <SEO title="Articles" />
      <SubLayout title={'Articles'}>
      <Grid container justify={'center'}>
        <Grid item xs={8}>
          <Typography className={classes.sectionHeader} variant={'h4'}>{currentArticle.title}</Typography>
          <Component />
          <Typography className={classes.para}>Want to download this article? <a className={classes.link} href={currentArticle.download}>click here!</a></Typography>
        </Grid>
        <Grid item xs={8} style={{ marginTop: 40, paddingTop: 40, borderTop: 'solid grey 2px'}}>
            <Typography className={classes.sectionHeaderCenter} variant={'h4'}>Read More</Typography>
            <Grid container spacing={16} justify={'center'}>
              {Object.keys(articles).map(a => {
                return (<Grid key={a} item>
                  <Button onClick={() => this._switchArticle(a)} style={{textTransform: 'capitalize'}}>
                    <Paper style={{padding: 30}}>
                    <Typography style={{color: colors.imc_blue.main}} variant={'h6'}>{articles[a].title}</Typography>
                    <Typography style={{color: colors.imc_blue.main}}>{articles[a].description}</Typography>
                    </Paper>
                  </Button>
                </Grid>)
              }
              )}
            </Grid>
          </Grid>
        </Grid>
      </SubLayout>
    </Layout>)
  }
}

export default withStyles(styles)(ArticlesPage)
