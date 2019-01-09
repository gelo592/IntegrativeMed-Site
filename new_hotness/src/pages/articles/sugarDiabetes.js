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
  },
  link: {
    color: colors.imc_blue.light,
  },
});

const SugarArticle = ({ classes }) => (
  <div>
    <Typography className={classes.para}> Straight Talk on Diabetes and Sugar Consumption</Typography>
    <Typography className={classes.para}> 
      The CDC reported that in 2014 there were 29 million Americans
      with diabetes and another 50 million with pre-diabetes. This is an
      epidemic that is caused in large part by sugars added unnecessarily
      to our foods. Added sugar also increases the risk of heart disease,
      stroke, and cancer. This growing epidemic has the potential to
      derail our health care system and it is largely preventable!
      Sugar is added to many of the foods we eat daily. Examples
      include applesauce, bread, cereal, chips, ketchup, soft drinks and
      yogurt, to name a few. The average American eats 130 pounds of
      sugar annually, really 130 pounds! Most of the sugar is added
      gratuitously to food with no nutritional benefit. With all of that
      sugar it is no wonder there is an epidemic of diabetes in this
      country.
    </Typography>
    <Typography className={classes.para}> 
      Sugar sweetened beverages are some of the worst offenders. A
      single 12-ounce can of can of cola contains 42 grams of sugar, 160
      calories. A whopping 10 teaspoons of sugar per can! It does not
      stop there, in a typical breakfast cereal or pop tart there is 20 – 40
      grams of sugar, or 5 to 10 teaspoons. This is much too much sugar
      for a child, or an adult.
    </Typography>
    <Typography className={classes.para}> 
      The American Heart Association recommends less than 30 grams
      of added sugar in an entire day. The typical American eats more
      than 200 grams daily. Sugars that are naturally found in fruits and
      vegetables are not the problem.
    </Typography>
    <Typography className={classes.para}> 
      Sugar is a major cause of diabetes. Reducing it would prevent
      many of the future cases of diabetes. This was clearly
      demonstrated by Dr. Lustig, a pediatric diabetes specialist, who
      restored normal blood sugar control in children with pre-diabetes
      by eliminating all foods with added sugars in their diets. The
      children ate the same amount calories but no food with added
      sugar. Their pre-diabetes reversed completely in 10 days! Sadly,
      children frequently develop type II diabetes, a disease previously
      thought to occur only in adults. For more information on the
      danger of added sugars see Dr. Lustig’s interview on 60 Minutes:
      <br />
      <a className={classes.link} href={'https://www.youtube.com/watch?v=pxG3YiBMMZE'}>https://www.youtube.com/watch?v=pxG3YiBMMZE</a>
    </Typography>
    <Typography className={classes.para}> 
      How can we prevent diabetes in our lives and in our children’s
      lives? Start by reading labels. The ingredients section will list the
      added sugars. Beware though that sugar can be hard to recognize.
      The food industry disguises it by using more than 50 different
      aliases for sugar. A few examples include cane sugar, cane syrup,
      glucose, high fructose corn syrup, dextran, concentrated fruit juice,
      agave nectar, and sucrose.
    </Typography>
    <Typography className={classes.para}> 
      When selecting a product like applesauce, breakfast cereal, salad
      dressing, peanut butter, or pizza sauce, read the labels and choose
      one with little or no added sugars. Typically for most product
      categories there are delicious options that are low in added sugar.
      Do we really need added sugar in peanut butter and pizza sauce
      anyway?
    </Typography>
    <Typography className={classes.para}> 
      Once a person has type II diabetes it is more challenging to treat it
      with diet and exercise. It remains quite possible though. It starts by
      eliminating added sugars. Next reduce carbohydrates to 50 - 75
      grams per day. Carbohydrates in the form of breads, bagels,
      cereals, crackers, pasta, sweet fruits, and fruit juices are
      problematic for diabetics, raising blood sugar substantially. These
      foods are best avoided in diabetics.</Typography>
    <Typography className={classes.para}>
      The American Diabetic Association recommends 40 or more grams
      of carbohydrates per meal, the equivalent of 10 teaspoons of sugar.
      Many health researchers believe this recommendation is behind the
      times. It senselessly raises blood sugar and does not address the
      root of the diabetic problem – the inability to tolerate sugar and
      carbohydrates in the diet. For more information on this topic please
      see this terrific you-tube video form Purdue University on 
      naturally reversing type II diabetes with a low carbohydrate diet: 
      <br />
      <a className={classes.link} href={'https://www.youtube.com/watch?v=da1vvigy5tQ'}>https://www.youtube.com/watch?v=da1vvigy5tQ</a></Typography>
    <Typography className={classes.para}> 
      The primary foods to eat on a low carbohydrate diet are vegetables,
      berries, oils, nuts, meats, and fish. Avoid added sugars and the
      carbohydrates listed above. There are resources on the Internet as
      well as smart phone applications that provide information needed
      to determine the carbohydrate content of foods. I recommend the
      following sites:
      <ul>
        <li>Website – <a className={classes.link} href={'http://nutritiondata.self.com/'}>http://nutritiondata.self.com/</a></li>
        <li>Website and smart phone application – <a className={classes.link} href={'https://www.myfitnesspal.com/'}>https://www.myfitnesspal.com/</a></li>
      </ul>
    </Typography>
    <Typography className={classes.para}> 
      The following are a couple of other practices that help diabetics
      keep blood sugars down. The first is walking 10 minutes after
      eating. Walking stimulates the rapid uptake and storage of glucose
      in muscle. This effect is so powerful that it decreases the rise in
      blood sugar after eating up to 50%. That is an amazing benefit for
      10 minutes of walking!
    </Typography>
    <Typography className={classes.para}> 
      The second practice is using apple cider vinegar to inhibit glucose
      absorption from the gastrointestinal tract. To do this mix 1
      tablespoon of apple cider vinegar in 4 ounces of water, and
      possibly a small amount of honey for taste, then drink it with your
      meal. Apple cider vinegar appreciably decreases blood sugar
      spikes after eating!
    </Typography>
    <Typography className={classes.para}> 
      The epidemic in diabetes is the unfortunate end product of modern
      society, processed foods, and excessive added dietary sugars.
      Diabetes increases the risk of many diseases including heart attack,
      stroke, and cancer. The toll of this epidemic is enormous and it is
      largely preventable. Prevention begins with reading labels and
      avoiding added sugar!
    </Typography>
  </div >
)

export default withStyles(styles)(SugarArticle)
