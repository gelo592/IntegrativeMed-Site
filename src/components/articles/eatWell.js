import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../constants/constants';

const styles = theme => ({
  para: {
    lineHeight: 2.2,
    fontSize: 17,
    paddingBottom: 20,
    color: colors.text,
  },
  header: {
    color: colors.imc_blue.main,
    fontWeight: 700,
  }
});

const EatingArticle = ({ classes }) => (
  <div>
    <Typography className={classes.para}> 
      Food is part of our everyday life; it nourishes us, provides pleasure and
      comfort, and it is woven into our social lives. Our daily food choices impact
      our health too, in very important ways. I have found that the best strategy to
      improve food choices in my patients, and myself, is not to put restrictions on
      less healthy foods but rather to encourage the healthiest foods more often.
      Choosing healthy foods early and often leaves little room for less
      wholesome alternatives - processed foods, snacks, and sweets, etc.
    </Typography>
    <Typography className={classes.para}> 
      Below is a list of my favorites. They are among the healthiest foods on our
      planet – and are both incredibly nutritious and delicious. These nutrient rich
      foods naturally leave us more satisfied, with fewer cravings, and less likely
      to overeat unhealthy alternatives. Try some of the foods below and you may
      discover foods you love that will love you back with better health and
      vitality!
    </Typography>
    <Typography className={classes.header}> 
      Foods to Eat Often
    </Typography>
      <ul>
        <li><Typography className={classes.para}>Color vegetables of all kinds, organic whenever possible.
        (Herbicides and pesticides found on conventionally grown
        foods raise the risk of diabetes and obesity. See the Dirty
        Dozen and the Clean Fifteen below.)</Typography></li>
        <li><Typography className={classes.para}>Green leafy vegetables including romaine, spinach, collards,
        and kale. These are high in fiber, low in calories, and full of
        phytonutrients, plant nutrients that keep us healthy.</Typography></li>
        <li><Typography className={classes.para}>Beans and lentils are a great source of fiber, protein, and they
        are wonderful at lowering blood sugar and cholesterol.</Typography></li>
        <li><Typography className={classes.para}>Berries, such as blueberries, strawberries, and raspberries are
        rich in pigmented phytonutrients that protect us from
        inflammation and help in the prevention of eye disease and
        heart disease.</Typography></li>
        <li><Typography className={classes.para}>Meats and poultry are a terrific source of many nutrients,
        protein included. Choose naturally raised and antibiotic free if
        possible. You might even branch out and add some bison,
        venison, and lamb.</Typography></li>
        <li><Typography className={classes.para}>Seafood is another great source of protein and health
        promoting omega three oils. The small cold-water fish,
        including salmon, sardines, and anchovies are lowest in
        mercury. Wild caught whenever possible.</Typography></li>
        <li><Typography className={classes.para}>Dairy products are nutritious and lessen diabetes and improve
        a woman’s fertility. Whole fat is now preferred; the USDA no
        longer prohibits saturated fats. Yogurts and kefirs with live
        bacterial cultures are examples with the added benefit of the
        probiotics.</Typography></li>
        <li><Typography className={classes.para}>Whole grains like quinoa, brown rice, steel-cut oats are filling,
        high in fiber, and lower blood sugar and cholesterol.</Typography></li>
        <li><Typography className={classes.para}>Cruciferous vegetables, cabbage, broccoli, bok choy, and
        cauliflower, help us naturally detoxify and lower the risk of many
        cancers.</Typography></li>
        <li><Typography className={classes.para}>Herbs and spices including garlic, rosemary, turmeric, parsley,
        chili, curry spices delightfully flavor our foods and lower
        inflammation.</Typography></li>
        <li><Typography className={classes.para}>Nuts lower our risk of heart disease and stroke. Have a handful
        of almonds, walnuts, pecans, macadamia, or hazel nuts each
        day.</Typography></li>
        <li><Typography className={classes.para}>Teas like green, black, and oolong boost our metabolism and
        reduce our risk of many cancers, especially breast cancer. Have
        3 or more cups daily for the most benefit.</Typography></li>
        <li><Typography className={classes.para}>Chocolate and cocoa, at least 75% dark, lowers blood pressure
        and occurrence of stroke. Hooray! Enjoy a small amount daily.</Typography></li>
        <li><Typography className={classes.para}>Extra virgin olive oil, last but certainly not least. It lowers heart
        disease and stroke up to 30%. Enjoy it liberally, meaning
        tablespoons daily!</Typography></li>
      </ul>
    <Typography className={classes.para}> 
      Avoiding Dirty Dozen and choosing the Clean 15 will reduce your
      exposure to pesticides and herbicides.
    </Typography>
    <Typography className={classes.para}> 
      The Dirty Dozen are common fruits and vegetables most likely to
      contain high levels of pesticides and herbicides. A healthier option is
      to purchase these varieties organically grown. The Clean 15 contains
      varieties that commonly have less herbicides and pesticides and can
      be purchased conventionally grown to keep costs down. Find more
      information at EWG.org (Environmental Working Group)
    </Typography>
    <Grid container spacing={40}>
      <Grid item>
        <Typography className={classes.header}> 
          Dirty Dozen
        </Typography>
          <ol>
            <li><Typography className={classes.para}>Apple</Typography></li>
            <li><Typography className={classes.para}>Peach</Typography></li>
            <li><Typography className={classes.para}>Nectarine</Typography></li>
            <li><Typography className={classes.para}>Strawberries</Typography></li>
            <li><Typography className={classes.para}>Grapes</Typography></li>
            <li><Typography className={classes.para}>Celery</Typography></li>
            <li><Typography className={classes.para}>Spinach</Typography></li>
            <li><Typography className={classes.para}>Sweet Bell Peppers</Typography></li>
            <li><Typography className={classes.para}>Cucumbers</Typography></li>
            <li><Typography className={classes.para}>Cherry Tomatoes</Typography></li>
            <li><Typography className={classes.para}>Snap Peas</Typography></li>
            <li><Typography className={classes.para}>Potatoes</Typography></li>
          </ol>
      </Grid>
      <Grid item>
        <Typography className={classes.header}> 
          Clean Fifteen
        </Typography>
          <ol>
            <li><Typography className={classes.para}>Avocado</Typography></li>
            <li><Typography className={classes.para}>Sweet Corn</Typography></li>
            <li><Typography className={classes.para}>Pineapple</Typography></li>
            <li><Typography className={classes.para}>Cabbage</Typography></li>
            <li><Typography className={classes.para}>Sweet Peas</Typography></li>
            <li><Typography className={classes.para}>Onions</Typography></li>
            <li><Typography className={classes.para}>Asparagus</Typography></li>
            <li><Typography className={classes.para}>Mangos</Typography></li>
            <li><Typography className={classes.para}>Papaya</Typography></li>
            <li><Typography className={classes.para}>Kiwi</Typography></li>
            <li><Typography className={classes.para}>Eggplant</Typography></li>
            <li><Typography className={classes.para}>Grapefruit</Typography></li>
            <li><Typography className={classes.para}>Cantaloupe</Typography></li>
            <li><Typography className={classes.para}>Cauliflower</Typography></li>
            <li><Typography className={classes.para}>Sweet Potatoes</Typography></li>
          </ol>
      </Grid>
    </Grid>
    <Typography className={classes.para}> 
      Last, I’ll leave you with my favorite quote on healthy food choices:
    </Typography>
    <Typography className={classes.para}> 
      "Eat Food, Not Too Much, Mostly Plants!"
    </Typography>
    <Typography className={classes.para}>
      <b>Michael Pollan</b> Author: <i>The Omnivore’s Dilemma</i>
    </Typography>
  </div>
)

export default withStyles(styles)(EatingArticle)