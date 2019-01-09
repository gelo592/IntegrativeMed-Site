import React from 'react'
import { Typography, Grid } from '@material-ui/core'
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

const CoQ10Article = ({ classes }) => (
  <div>
     <Typography className={classes.para}> 
      CoQ10 Reduces All Cause Mortality by 50% in Congestive Heart Failure Patients - Are
      you recommending it to your CHF patients?
    </Typography>
    <Typography className={classes.para}> 
      According to data presented at the European Society of Cardiology’s annual meeting, the
      Q-SYMBIO trial, you probably should be.
    </Typography>
    <Typography className={classes.para}> 
      This study evaluated 420 severe heart failure patients, NYHA Class III or IV. They
      compared randomly selected individuals who were either on CoQ10, 100mg three times
      daily, or placebo. They were monitored for 24 months. The study's primary endpoint was
      major adverse cardiovascular event (MACE), which included unplanned hospital
      admission because of worsening heart failure symptoms, cardiovascular death,
      mechanical circulatory support, and urgent cardiac transplantation. The researchers
      reported that CoQ10 reduced the risk of MACE by approximately 50%.
      Importantly, all cause mortality was also reduced by 50% in the CoQ10 group, 18 deaths
      in the treated-group vs. 36 deaths in the placebo-group.
    </Typography>
    <Typography className={classes.para}> 
      The studies author Prof. Mortensen wrote:
      "CoQ10 is the first medication to improve survival in chronic heart failure since ACE
      inhibitors and beta blockers more than a decade ago and should be added to standard
      heart failure therapy.”
    </Typography>
    <Typography className={classes.para}> 
      “Other heart failure medications block rather than enhance cellular processes and may
      have side effects. Supplementation with CoQ10, which is a natural and safe substance,
      corrects a deficiency in the body and blocks the vicious metabolic cycle in chronic heart
      failure called the energy starved heart."
      CoQ10 is found in almost every cell in the body and is vital in the conversion of food into
      cellular energy, acting as a cofactor along the electron transport chain deep in the
      mitochondria. CoQ10 is also a powerful antioxidant, protecting the cell and mitochondria
      from oxidative damage.
    </Typography>
    <Typography className={classes.para}> 
      CoQ10 is manufactured in the body, though less as we age, and can be found in certain
      foods, especially organ meat, fish and poultry. Dietary sources are insufficient to have a
      significant impact on heart failure. Additionally, important medications, including statins
      and beta-blockers, significantly deplete the body of CoQ10.
      Though it is considered very safe there are few important interactions or side effects for
      CoQ10. There have been reports of it reducing the benefits of wafarin and clopidigrel. It
      is a known antihypertensive agent; this could be a side effect or potentially a benefit.
      And, because of its antioxidant activity, it is not recommended concurrently with
      chemotherapy.
    </Typography>
    <Typography className={classes.para}> 
      It has shown benefit in many conditions, (which is not too surprising given its
      mechanism, i.e., enhancing cellular energy), including hypertension, diabetes mellitus,
      periodontal disease, Parkinson’s disease, Alzheimer’s disease, neuropathies, arrhythmias,
      and diminished sperm motility.
    </Typography>
    <Typography className={classes.para}> 
      A draw back of CoQ10 for many patients is its cost. In the dose used in this study, 100mg
      three times daily, it is likely to cost in excess of 50 dollars monthly. CoQ10 is worth it in
      debilitating CHF, however it is expensive and possibly cost prohibitive for some patients.
      In summary, CoQ10 is a powerful, safe, and effective dietary supplement. When added to
      conventional treatment for CHF it significantly improves functional capacity and cuts
      major cardiovascular events and mortality by 50%. This important study indicates that
      CoQ10 is an important addition to medical regimen in our patients burdened with this
      chronic, debilitating, and life threatening disease.
    </Typography>
  </div>
)

export default withStyles(styles)(CoQ10Article)