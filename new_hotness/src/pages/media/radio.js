import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Fab, Grid, Typography, Paper } from '@material-ui/core';
import SubLayout from '../../components/sublayout';
import { radio } from '../../constants/constants';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import { graphql } from 'gatsby';
import withRoot from '../../components/withRoot';

const styles = theme => ({
  buttonSection: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: '30px 40px',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    textTransform: 'uppercase',
    color: colors.text,
    fontSize: 10,
  },
  episode: {
    fontWeight: 700,
    color: colors.imc_blue.main
  },
  description: {
    fontSize: 17,
    paddingBottom: 20,
    color: colors.text,
  },
  fab: {
    backgroundColor: colors.imc_blue.main,
  },
  radioWidge: {
    position: 'fixed',
    backgroundColor: 'white',
    bottom: 0,
    right: 0,
    padding: '10px 20px',
    borderTopLeftRadius: 10,
    textAlign: 'right',
  },
  player: {
    marginTop: 8,
  }
});


class RadioPage extends React.Component {
  // state = { episode: "KWOS_2018_06_25"};

  constructor(props) {
    super(props);
    const { data } = this.props;
    const episodes = {};
    data.allFile.edges.forEach(e => {
      episodes[e.node.name] = e.node;
    });
    this.state = {
      currEp: {
        date: 'June 25, 2018',
        title: 102,
        description: 'Dr. Link talks mosquitoes, common drugs – uncommon effects and Vitamin D',
        duration: '15:03',
        station: 'KWOS',
        name: 'KWOS_2018_06_25',
      },
      episodes
    };
  }

  _handlePlay = (episode) => {
    this.setState({ currEp: episode }, this._audio.play);
  }

  render() {
    const { classes } = this.props;
    const { episodes, currEp } = this.state;
    return (
      <Layout>
        <SEO title="Dr. Link on the radio" />
        <SubLayout title={"Radio"}>
          <Grid container spacing={16} justify={'center'}>
            {radio.sort((a, b) => b.title - a.title).map(ep => (
              <Grid item key={ep.date} xs={9} md={7}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item xs={12} sm={9}>
                      <Typography className={classes.date}>{ep.date}</Typography>
                      <Typography className={classes.episode}>Episode: #{ep.title}</Typography>
                      <Typography className={classes.description}>{ep.description}</Typography>
                      {/* <Typography>{ep.station}</Typography> */}
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.buttonSection}>
                      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => this._handlePlay(ep)}>
                        <PlayIcon />
                      </Fab>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <div className={classes.radioWidge}>
            <Typography className={classes.date}>{currEp.date}</Typography>
            <Typography className={classes.episode}>Episode: #{currEp.title}</Typography>
            <audio ref={a => this._audio = a} id="audio" className={classes.player} src={episodes[currEp.name].publicURL} controls>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </SubLayout>
      </Layout>
    )
  }
}

export const query = graphql`
  query RadioPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "audio" } }) {
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

export default withRoot(withStyles(styles)(RadioPage))
