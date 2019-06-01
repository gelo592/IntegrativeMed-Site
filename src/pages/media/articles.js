import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import CoQ10Article from '../../components/articles/coq10';
import SugarArticle from '../../components/articles/sugarDiabetes';
import EatingArticle from '../../components/articles/eatWell';
import GIArticle from '../../components/articles/GIHealth';
import PreventionArticle from '../../components/articles/prevention';
// import DietaryArticle from '../../components/articles/dietaryGuidelines';
import { Paper, Typography, Grid } from '@material-ui/core';
import SubLayout from '../../components/sublayout';
import { colors } from '../../constants/constants';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "gatsby"
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
  sectionHeaderCenter: {
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
    color: colors.imc_blue.light,
  },
  sectionHeader: {
    color: colors.imc_blue.light,
  },
  paper: {
    padding: '30px 20px',
    marginBottom: theme.spacing.unit * 4,
  },
  author: {
    // textTransform: 'uppercase',
    // color: colors.text,
    fontSize: 16,
  },
  date: {
    marginBottom: theme.spacing.unit * 3,
    textTransform: 'uppercase',
    color: colors.text,
    fontSize: 12,
  }
});

class ArticlesPage extends React.Component {
  // state = {
  //   currentKey: 'coq10'
  // };
  constructor(props) {
    super(props)
    let currentKey = 'coq10';
    if (props && props.location && props.location.state && props.location.state.currentKey !== null) {
      currentKey = props.location.state.currentKey;
    } else if (props && props.location && props.location.search !== null) {
      currentKey = props.location.search.slice(1);
    }
    this.state = {
      currentKey,
    }
  }

  _switchArticle = (newKey) => {
    this.setState({ currentKey: newKey });
  }

  render() {
    let articles = {
      'coq10': {
        component: CoQ10Article,
        title: "Congestive Heart Failure",
        download: 'something.pdf',
        author: 'Dr. Chris Link',
        date: 'July 29, 2015',
      },
      'eating': {
        component: EatingArticle,
        title: "Eat Well!",
        download: 'something.pdf',
        author: 'Dr. Chris Link',
        date: 'September 2, 2015',
      },
      'gi': {
        component: GIArticle,
        title: "GI Health",
        download: 'something.pdf',
        author: 'Dr. Chris Link',
        date: 'July 29, 2015',
      },
      'prevention': {
        component: PreventionArticle,
        title: "Prevention",
        download: 'something.pdf',
        author: 'Dr. Chris Link',
        date: 'July 31, 2015',
      },
      'sugar': {
        component: SugarArticle,
        title: "Straight Talk on Diabetes and Sugar Consumption",
        download: 'something.pdf',
        author: 'Dr. Chris Link',
        date: 'November 10, 2015',
      },
      // 'dietary': {
      //   component: DietaryArticle,
      //   title: "Dietary Guidelines",
      //   download: 'something.pdf',
      //   author: 'Dr. Chris Link',
      //   date: 'July 29, 2015',
      // },
    };
    let { currentKey } = this.state;
    let currentArticle = articles[currentKey || 'coq10'];
    let Component = currentArticle.component;
    let { classes } = this.props;
    return (<Layout>
      <SEO title={currentArticle.title} />
      <SubLayout title={'Articles'}>
      <Grid container justify={'center'}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
          <Typography className={classes.sectionHeader} variant={'h4'}>{currentArticle.title}</Typography>
          <Typography className={classes.author}>{currentArticle.author}</Typography>
          <Typography className={classes.date}>{currentArticle.date}</Typography>
          <Component />
          </Paper>
          {/* <Typography className={classes.para}>Want to download this article? <a className={classes.link} href={currentArticle.download}>click here!</a></Typography> */}
        </Grid>
        <Grid item xs={8} style={{ marginTop: 20, paddingTop: 40, borderTop: 'solid grey 2px'}}>
            <Typography className={classes.sectionHeaderCenter} variant={'h4'}>Read More</Typography>
            <Grid container spacing={16} justify={'center'}>
              {Object.keys(articles).map(a => {
                return (<Grid key={a} item>
                  <Link
                    to={`/media/articles?${a}`}
                    replace
                    state={{
                      currentKey: a,
                    }}
                    onClick={() => this._switchArticle(a)}
                  >
                    <Paper style={{padding: 30}}>
                    <Typography style={{color: colors.imc_blue.main}} variant={'h6'}>{articles[a].title}</Typography>
                    <Typography style={{color: colors.imc_blue.main}}>{articles[a].description}</Typography>
                    </Paper>
                  </Link>
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

export default withRoot(withStyles(styles)(ArticlesPage))
