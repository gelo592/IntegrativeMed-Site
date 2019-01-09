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

const PreventionArticle = ({ classes }) => (
  <div>
    <Typography className={classes.para}> 
      People are living longer thanks to the high-tech advancements in medicine. Antibiotics,
      blood pressure medications and cholesterol lowering medications add years to our lives.
      Surgeries, from removing the appendix and gallbladder to heart and kidney transplants,
      extend our lives too. The achievements of modern medicine are truly incredible.
      What is MORE INCREDIBLE, in my opinion, is that four low-tech lifestyle
      interventions have been proven to provide even greater health benefits than modern
      medications and surgeries!
    </Typography>
    <Typography className={classes.para}> 
      What are these AMAZING, health promoting, lifestyle interventions?
      <ol>
        <li>Stop Smoking</li>
        <li>Eat Vegetables and Fruit Every Day</li>
        <li>Move Every Day</li>
        <li>Maintain a Healthy Weight</li>
      </ol>
    </Typography>
    <Typography className={classes.para}> 
      How AMAZING are these interventions? VERY! According to recent research, if you
      follow these four lifestyle recommendations they can reduce your risk of the following
      illnesses by ASTONISHING amounts:
      <ul>
        <li>Reduce Diabetes by 93%</li>
        <li>Reduce Heart Attacks by 81%</li>
        <li>Reduce Strokes by 50%</li>
        <li>Reduce Cancer by 36%</li>
      </ul>
    </Typography>
    <Typography className={classes.para}> 
      Smoking is the single largest cause of preventable disease in the world. Not only does
      smoking affect the smoker, second hand smoke impacts the health of family, friends, and
      coworkers. Quitting smoking is not easy, but it is worth it! Quitting starts with the simple
      act of thinking why one may want to quit; e.g., personal health reasons, financial
      concerns, and, for many, a desire to be healthier to more fully participate in the lives of
      loved ones. Once a meaningful reason is decided upon, there are resources that can help a
      person succeed. These include the following:
      <ul>
        <li>Talk with your healthcare provider about options to support smoking cessation.</li>
        <li>1 800 Quit Now, 1 800 784 8669</li>
        <li>Nicotine replacement patches and gum</li>
        <li>Medications</li>
        <li>Acupuncture</li>
        <li>Commit by informing friends and family of your intentions.</li>
        <li>Plan the quit date!</li>
        <li>Remember, not everyone is successful the first attempt at smoking cessation - the key is to have determination and persistence!</li>
      </ul>
    </Typography>
    <Typography className={classes.para}> 
      Eating Vegetables and Fruits is incredibly powerful in lowering the risk of several
      chronic diseases. This does not mean you need to become a vegetarian, just add colorful
      vegetables and fruit to your food choices each day. Vegetables and fruits are high in four
      vital nutrients: fiber, magnesium, potassium, and importantly, polyphenols. Fiber,
      magnesium, and potassium work wonders lowering cholesterol, blood pressure, and the
      risk of colon cancer while also improving the function of the gastrointestinal tract, i.e.,
      reducing constipation.
    </Typography>
    <Typography className={classes.para}> 
      The natural pigments that add beautiful colors to food and provide many health benefits
      are known as polyphenols. The red colored lycopene, found in tomatoes and
      watermelons, is known to decrease heart disease and cancer. Another healthful
      polyphenol is the yellow-green pigment lutein; lutein is found in green leafy vegetables
      and is known to reduce the risk of macular degeneration, a major cause of blindness in
      adults. Anthocyanidin, the blue pigment found in berries, has been shown to decrease
      blood pressure, lower inflammation, and improve brain health. Eating more servings of
      colorful vegetables and fruits daily, preferably a serving or two with each meal, will help
      reduce the risk of many chronic and debilitating diseases.
    </Typography>
    <Typography className={classes.para}> 
      Moving Every Day has a big impact on health and longevity. Recent research indicates
      that activity is a key to good health. Importantly, this movement does not need to be highlevel
      aerobic activity like running or jogging. Walking, dancing, gardening, chores
      around the house, these are all terrific examples of healthy activity. Pick activities that
      interest you and get moving for at least 30 minutes a day. The research tells us that it is
      just as effective to split up these activities throughout the day. In fact, staying active all
      day is best because sitting for prolonged periods, all by itself, has been shown to reduce
      health and longevity. If you have a sedentary job, or enjoy watching TV, get up every 60
      minutes or so and move around for a few minutes to reduce the negative effects of being
      sedentary.
    </Typography>
    <Typography className={classes.para}> 
      Maintaining a Healthy Body Weight throughout adulthood impacts our health
      positively by lowering blood pressure and cholesterol, reducing the risk of cancer, and
      protecting our joints. Medical research has shown that we do not need to be slim - we
      simply need not to become obese to enjoy these health benefits. Body mass index (BMI)
      is the measure doctors use to assess for healthy body weight. BMI is calculated by
      dividing weight in kilograms by height in meters squared. There are tools available online
      to simplify this calculation. A normal BMI is less than 25, 25-30 is considered
      overweight, and greater than 30 is considered obese. What the interventions require is
      that you have a BMI of less than 30, less than obese. For example, if you are 5’4” tall in
      order to have a BMI of less than 30 you need to weigh under 170 pounds and if you are
      5’9” tall a weight of under 200 pounds will get you there - for most that is not too strict.
      It is important to note that weight loss of just 10 pounds can have measurable health
      benefits, particularly on blood pressure, blood sugar, and cholesterol levels. Aim for a
      BMI of less than 30 but recognize that even modest improvements in weight are quite
      helpful!
    </Typography>
    <Typography className={classes.para}> 
      While high-tech medicine has many incredible health benefits, current research tells us
      that low-tech lifestyle changes and nutritional medicine has the potential for even greater
      health benefits. Let’s bring these wonderful health benefits to our lives by quitting
      smoking, eating vegetables, moving every day, and maintaining a healthy body weight.
      In doing so, we will add years to our lives and life to our years!
    </Typography>
  </div>
)

export default withStyles(styles)(PreventionArticle)

