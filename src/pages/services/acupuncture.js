import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SubLayout from '../../components/sublayout';
import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';
import withRoot from '../../components/withRoot';

const styles = theme => ({
  paper: {
    marginBottom: 20,
    padding: 20,
  },
  link: {
    color: colors.imc_blue.light,
  },
  header: {
    marginBottom: theme.spacing.unit * 3,
    color: colors.imc_blue.light,
  },
  list: {
    listStyle: 'none',
    margin: 0,
  }, 
  listItem: {
    paddingBottom: 0,
  },
  listText: {
    color: colors.imc_blue.light
  },
  question: {
    fontSize: 20,
    color: colors.imc_blue.main,
    textDecorationColor: colors.imc_blue.main,
  },
  answer: {
    lineHeight: 2.2,
    fontSize: 17,
    paddingBottom: 20,
    color: colors.text, 
  },
  heading: {
    color: colors.text,
    fontSize: 20,
  }
});

const AcupuncturePage = ({ classes }) => (
  <Layout>
    <SEO title="Acupuncture" />
    <SubLayout title={'Acupuncture'}>
    <Grid container justify='center' spacing={32}>
      <Grid item xs={8}>
        <Typography className={classes.question}>Frequently Asked Questions</Typography>
          <ul className={classes.list}>
            <li className={classes.listItem}><a className={classes.listText} href="#q1"><Typography className={classes.listText}>What is acupuncture?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q2"><Typography className={classes.listText}>How does acupuncture work?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q3"><Typography className={classes.listText}>What is medical acupuncture? Is it different from ordinary acupuncture?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q4"><Typography className={classes.listText}>What is the scope of medical acupuncture?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q5"><Typography className={classes.listText}>How many treatments will I need?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q6"><Typography className={classes.listText}>Are there any side effects to the treatment?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q7"><Typography className={classes.listText}>What are the needles like? Do they hurt?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q8"><Typography className={classes.listText}>Does acupuncture really work?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q9"><Typography className={classes.listText}>Do I have to believe in acupuncture for it to work?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q10"><Typography className={classes.listText}>Are there any "DOs and DON'Ts" for me on the day of a treatment?</Typography></a></li>
            <li className={classes.listItem}><a className={classes.listText} href="#q11"><Typography className={classes.listText}>Is acupunture covered by health insurance?</Typography></a></li>
          </ul>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
        <Typography id={'q1'} className={classes.question}>What is acupunture?</Typography>
        <Typography className={classes.answer}>
        <b style={{color: colors.imc_blue.main}}>Acupuncture</b> is a method of encouraging the body to promote natural healing
            and to improve functioning. This is done by inserting needles and
            applying heat or electrical stimulation at very precise acupuncture points.
        </Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q2'} className={classes.question}>How does acupuncture work?</Typography>
        <Typography className={classes.answer}>
            The classical Chinese explanation is that channels of energy run
            in regular patterns through the body and over its surface. These
            energy channels, called meridians, are like rivers flowing through
            the body to irrigate and nourish the tissues. An obstruction in
            the movement of these energy rivers is like a dam that backs up
            in one part of the body and restricts it in others.
        </Typography>
        <Typography className={classes.answer}>
            The meridians can be influenced by needling the acupuncture points;
            the acupuncture needles unblock the obstructions at the dams, and
            reestablish the regular flow through the meridians. Acupuncture
            treatments can therefore help the body's internal organs to
            correct imbalances in their digestion, absorption, and energy
            production activities, and in the circulation of their energy
            through the meridians.
        </Typography>
        <Typography className={classes.answer}>
            The modern scientific explanation is that needling the acupuncture
            points stimulates the nervous system to release chemicals in the
            muscles, spinal cord, and brain. These chemicals will either change
            the experience of pain, or they will trigger the release of other
            chemicals and hormones which influence the body's own internal regulating system.
        </Typography>
        <Typography className={classes.answer}>
            The improved energy and biochemical balance produced by acupuncture
            results in stimulating the body's natural healing abilities,
            and in promoting physical and emotional well-being.
        </Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q3'} className={classes.question}>What is medical acupuncture? Is it different from ordinary acupuncture?</Typography>
        <Typography className={classes.answer}>Acupuncture is a very old medical art, and there are many approaches
            to learning and practicing it. Medical acupuncture is the term used
            to describe acupuncture performed by a doctor trained and licensed
            in Western medicine who has also had thorough training in acupuncture
            as a specialty practice. Such a doctor can use one or the other
            approach, or a combination of both as the need arises, to treat an illness.</Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q4'} className={classes.question}>What is the scope of medical acupuncture?</Typography>
        <Typography className={classes.answer}>
          Medical acupuncture is a system which can influence three areas of health care:
          <ul>
            <li>promotion of health and well-being,</li>
            <li>prevention of illness,</li>
            <li>treatment of various medical conditions.</li>
          </ul>
          While acupuncture is often associated with pain control, in the
          hands of a well-trained practitioner it has much broader
          applications. Acupuncture can be effective as the only treatment
          used, or as the support or adjunct to other medial treatment
          forms in many medical and surgical disorders. The World Health
          Organization recognizes the use of acupuncture in the treatment
          of a wide range of medical problems, including:
          <ul>
            <li>
              Digestive disorders: gastritis and hyperacidity, spastic
              colon, constipation, diarrhea.
            </li>
            <li>
              Respiratory disorders: sinusitis, sore throat, bronchitis,
              asthma, recurrent chest infections.
            </li>
            <li>
              Neurological and muscular disorders: headaches, facial tics,
              neck pain, rib neuritis, frozen shoulder, tennis elbow, various
              forms of tendinitis, low back pain, sciatica, osteoarthritis.
            </li>
            <li>Urinary, menstrual, and reproductive problems.</li>
            <li>
              Acupuncture is particularly useful in resolving physical problems
              related to tension and stress and emotional conditions.
            </li>
          </ul>
        </Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q5'} className={classes.question}>How many treatments will I need?</Typography>
        <Typography className={classes.answer}>The number of treatments needed differs from person to person.
            For complex or long-standing conditions, one or two treatments a week
            for several months may be recommended. For acute problems, usually
            fewer visits are required. For health maintenance, four sessions a
            year may be all that is necessary.</Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q6'} className={classes.question}>Are there any side effects to the treatment?</Typography>
        <Typography className={classes.answer}>
            Usually not. As energy is redirected in the body, internal
            chemicals and hormones are stimulated and healing begins to
            take place. Occasionally the original symptoms worsen for
            a few days; or other general changes in appetite, sleep,
            bowel or urination patterns, or emotional state may be triggered.
            These should not cause concern, as they are simply indications
            that the acupuncture is starting to work. It is quite common
            with the first one or two treatments to have a sensation of
            deep relaxation or even mild disorientation immediately following
            the treatment. These pass within a short time, and never require
            anything more than a bit of rest to overcome.</Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q7'} className={classes.question}>What are the needles like? Do they hurt?</Typography>
        <Typography className={classes.answer}>
            People experience acupuncture needling differently. Most
            patients feel only minimal pain as the needles are inserted;
            some feel no pain at all. Once the needles are in place,
            there is no pain felt. Acupuncture needles are very thin and
            solid and are made from stainless steel. The point is smooth
            (not hollow with cutting edges like a hypodermic needle) and
            insertion through the skin is not as painful as injections or
            blood sampling. The risk of bruising and skin irritation is
            less than when using a hollow needle. Because your doctor uses
            disposable needles, there is no risk of infection from the treatments.</Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q8'} className={classes.question}>Does acupuncture really work?</Typography>
        <Typography className={classes.answer}>
            Yes. In the past 2,000 years, more people have been successfully
            treated with acupuncture than with all other health modalities
            combined. Today acupuncture is practiced widely in Asia, the
            Soviet Union, and in Europe. It is now being used more and more
            in America by patients and physicians. Acupuncture treatments
            can be given at the same time other techniques are being used,
            such as conventional Western medicine, osteopathic or chiropractic
            adjustments, and homeopathic or naturopathic prescriptions.
            It is important that your physician-acupuncturist know everything
            that you are doing, so he or she can help you get the
            most benefit from all your treatments.</Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q9'} className={classes.question}>Do I have to believe in acupuncture for it to work?</Typography>
        <Typography className={classes.answer}>
            No. Acupuncture is used successfully on cats, dogs, horses
            and other animals. These animal patients do not understand
            or believe in the process that helps them get better. A
            positive attitude toward wellness may reinforce the effects
            of the treatment received, just as a negative attitude may
            hinder the effects of acupuncture or any other treatment.
            A neutral attitude ("I don't know if I really believe in this.")
            will not block the treatment results.</Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q10'} className={classes.question}>Are there any "DOs and DON'Ts" for me on the day of a treatment?</Typography>
        <Typography className={classes.answer}>
        <ul>
            <li>
              Do not eat an unusually large meal immediately before or after
              your treatment and drink plenty of fluids.
            </li>
            <li>
              Do not over-exercise, engage in sexual activity, or consume
              alcoholic beverages within 6 hours before or after the treatment.
            </li>
            <li>
              Plan your activities so that after the treatment you can get
              some rest, or at least not have to be working at top performance.
              This is especially important for the first few visits.
            </li>
            <li>
              Continue to take any prescription medicines as directed by
              your regular doctor. Substance abuse (drugs and alcohol)
              especially in the week prior to treatment will seriously
              interfere with the effectiveness of acupuncture treatments.
            </li>
            <li>
              Remember to keep good mental or written notes of what your
              response is to the treatment. This is important for your doctor
              to know so that he can modify your follow-up treatments.
            </li>
          </ul>
        </Typography>
        </Paper>
        <Paper className={classes.paper}>
        <Typography id={'q11'} className={classes.question}>Is acupunture covered by health insurance?</Typography>
        <Typography className={classes.answer}>
            Some insurance companies currently cover acupuncture costs;
            other companies do not yet recognize the value of acupuncture.
            Each health policy must be reviewed to determine acupuncture benefits.
            More and more insurance companies are recognizing the value of providing
            coverage for medical acupuncture services. You can help by insisting
            that your insurance company offer you reimbursement for acupuncture.
        </Typography>
        </Paper>
      </Grid>
    </Grid>
    </SubLayout>
  </Layout>
)

export default withRoot(withStyles(styles)(AcupuncturePage))
