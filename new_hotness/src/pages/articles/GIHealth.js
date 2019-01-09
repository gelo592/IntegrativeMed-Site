import React from 'react'
import Typography from '@material-ui/core/Typography';
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

const GIArticle = ({ classes }) => (
  <div>
    <Typography className={classes.para}> 
      Central to great health is a smoothly functioning gastrointestinal tract, GI tact. When the
      GI tract is not functioning well one may experience any number of symptoms including
      heartburn, bloating, abdominal pain, constipation, and diarrhea.
      These are important symptoms and tell us that something may be out of balance. It is
      important that we listen to and understand the cause of these symptoms because the
      health of GI tract impacts overall health. The function of the GI tract influences our
      digestion and comfort and when not functioning well it can lead to inflammation,
      autoimmunity, cardiovascular disease, and cancer. If you frequently experience any of the
      above symptoms ask yourself the following questions:
      <ul>
        <li>Are you making time to relax, and chew, when you eat?</li>
        <li>Are you eating a balanced diet?</li>
        <li>Are you limiting processed foods?</li>
        <li>Are you regularly eating foods that you may be sensitive to – common offenders include wheat, dairy, eggs, sugar?</li>
        <li>Are you drinking too much alcohol?</li>
      </ul>
    </Typography>
    <Typography className={classes.para}> 
      Gastrointestinal reflux, “GERD” or “heartburn”, is one of the commonest GI tract
      symptoms. Acid blocking medications, proton pump inhibitors, PPI’s, like omeprazole
      (Prilosec) and lansoprazole (Prevacid), are commonly known as “The Purple Pill”. The
      PPI’s can help control these symptoms and, importantly, they can also heal a raw, red, and
      even ulcerated upper GI tract. However, like most powerful medications, they can have
      serious side effects, including limiting absorption of important vitamins and minerals.
      They also increase the risk of heart attacks, osteoporosis, the premature thinning of the
      bones, and increase the risk of certain infections.
    </Typography>
    <Typography className={classes.para}> 
      There are 21 million Americans on PPI’s daily though they were never intended for longterm
      use. In fact, current recommendations hold that they are best used only 4 – 8 weeks.
      A key factor that keeps people on these medications long-term, besides the doctor’s
      prescription, is that when stopping PPI’s one may actually produce more stomach acid
      then before the medication was ever started – that is, they can worsen the very problem
      they were supposed to treat.
    </Typography>
     <Typography className={classes.para}> 
      Whether one may use over the counter versions of these medications, as needed, or daily,
      as prescribed your doctor, it is possible for most people to safely wean from these
      medications. We will discuss the strategy to do so below. Before we do I want to state
      that there are certain medical conditions that require these medications long-term so
      please check with your doctor before making any changes in your medications.
      The most common reversible causes of heartburn are eating too much, eating too late,
      eating processed, packaged, and fast foods, drinking alcohol, and eating foods that we
      may have sensitivities too. The following are suggestions to limit heartburn symptoms
      naturally.
      <ul>
        <li>Eat your evening meal as early as possible, preferably at least 3 hours before bed.
        Going to bed soon after eating increases the potential for food to reflux from the
        stomach into the esophagus causing heartburn.</li>
        <li>Many Americans eat their largest meal in the evening; other cultures eat the
        largest meal at noon. Eating larger meals early in the day can be very helpful.</li>
        <li>Limit packaged and processed foods because they contain unhealthy fats and
        carbohydrates, which are a frequent cause of reflux.</li>
        <li>Reduce or eliminate alcohol. If you choose to have alcohol limit it to 1 or 2
        servings with your meal and no alcohol 3 hours before bed. Alcohol opens the
        valve between the stomach and the esophagus, which encourages reflux.</li>
        <li>Wheat, dairy, corn, and sugar are common food sensitivities and a common
        trigger of reflux. Eliminating these for 3 or 4 weeks is a great test to determine if
        these foods are problematic for you. If your symptoms improve then one or more
        of the bunch is likely to be the culprit. Add the foods back to your diet
        individually to see which one may be the offender.</li>
      </ul>
    </Typography>
    <Typography className={classes.para}> 
      Once your symptoms improve, possibly from implementing one or more of the ideas
      above, and you have consulted with your physician, it may be time to gradually wean the
      omeprazole, lansoprazole or other PPI. The following is the method I have used
      successfully in many patients. Remember that these PPI’s actually create a short-term
      increase in acid production when they are being discontinued so wean them slowly.
      <ul>
        <li>Start by taking the medication every other day. On the days off the PPI use
        Pepcid/famotidine, 20mg, this is an acid reducer too, but less powerful. It is
        available without prescription at most pharmacies.</li>
        <li>Then, when doing well, in about two weeks, decrease the PPI to every third day,
        and then after a few weeks more, decrease to every fourth day, while continuing
        to use the Pepcid/famotidine on each of the intervening days.</li>
        <li>Eventually, after 6 – 8 weeks you will be off the PPI safely. Finally, when feeling
        well, one can wean the Pepcid/famotidine.</li>
        <li>Tums (Calcium carbonate) can be used as needed for occasional heartburn
        symptoms during or after weaning from the PPI.</li>
      </ul>
    </Typography>
    <Typography className={classes.para}> 
      Listening to your body, asking the questions above, and making a few simple changes
      will help to improve your GI function and your health. If symptoms persist it is important
      to consult your physician to make certain there are no serious underlying causes.
      Listening to your body may also reduce your need for medications with potential side
      effects – like the “The Purple Pill”.
    </Typography>
  </div>
)

export default withStyles(styles)(GIArticle)