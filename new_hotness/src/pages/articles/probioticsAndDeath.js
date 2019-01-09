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

const ProbioticsArticle = ({ classes }) => (
  <div>
    <Typography className={classes.para}> 
      During the 20th century keeping harmful bacteria in check decidedly
      improved human health. According to new research, during the 21st century
      cultivating healthy bacteria may well be even more beneficial!
      The human microbiome includes all of the bacteria, viruses, and yeast that
      live in and on human beings. There are trillions of organisms making up the
      microbiome for each and every one of us. The majority of these microbes
      live in the gastrointestinal tract. Most are beneficial; in fact, many are
      essential for human health. The more diverse the bacteria are in an
      individual’s microbiome the healthier and more resilient they are likely to
      be.
        </Typography>
    <Typography className={classes.para}> 
      Understanding this microscopic ecosystem in depth is considered so
      important to public health that the National Institute of Health recently
      undertook the Human Microbiome Project. This is a multiyear, multimilliondollar
      program designed to classify all of the organisms living together with
      human beings.
        </Typography>
    <Typography className={classes.para}> 
      A richly diverse gastrointestinal microbiome provides an essential line of
      defense against a myriad of infections and assists in the absorption of
      vitamins and nutrients. It also reduces inflammation and the risk of several
      medical conditions including, asthma, allergy, colitis, diabetes, heart disease,
      multiple sclerosis, and rheumatoid arthritis, to name only a few. There are so
      many important functions of the microbiome in health that it is now
      considered one of the most important “organs” in the human body.
        </Typography>
    <Typography className={classes.para}> 
      A healthy microbiome begins at birth. When the baby moves through the
      birth canal it is inoculated with the mothers bacteria. Breastfeeding adds
      more health promoting bacteria to the baby’s developing microbiome. This
      transfer of healthy bacteria, from mother to child, provides the foundation
      for the baby’s immune health. Children who are born vaginally and breastfed
      develop asthma, allergies, diabetes, eczema, and obesity at lower rates than
      children who are not.
        </Typography>
    <Typography className={classes.para}> 
      Recent research surprisingly showed that children with older siblings, pets,
      or who live on a farm have less asthma, allergy, and eczema. The research
      teaches us that exposure to a wide array of bacteria early in life acts to
      regulate the immune system, lessening the risk of allergic conditions.
      To maintain an optimal immune system throughout life we need to protect
      our gastrointestinal microbiome. The keys to doing so are to limit exposure
            to antibiotics and to eat an assortment of plants and fermented foods.</Typography>
    <Typography className={classes.para}> 
      Antibiotic exposure comes from both prescription antibiotics and from the
      routine use of antibiotics in animal husbandry and therefore in the dairy,
      meats, and poultry that we consume. It is good to have a discussion with
      your physician whether an antibiotic is absolutely necessary when
            prescribed. Also select antibiotic-free foods whenever possible.</Typography>
    <Typography className={classes.para}> 
      Vegetables, whole grains, and fruits have a wide range of plant fibers that
      feed the beneficial gut bacteria. These fibers act like fertilizer promoting the
      growth of a diverse and favorable microbiome. Fermented foods like
      sauerkraut, yogurt, and kefir provide probiotics, which are additional health
      promoting bacteria. When purchasing these products look for varieties that
      contain live cultures.
        </Typography>
    <Typography className={classes.para}> 
      For most of us eating a medley of plants and adding fermented foods may be
      all that is needed to sustain a healthy microbiome. For some, adding
      probiotic supplements may be helpful to prevent and treat certain medical
      conditions. These are available in capsules and in powdered forms. Probiotic
      bacteria are counted and described as colony-forming units, CFUs. Each
      CFU constitutes one bacterium. A typical probiotic capsule will have 1 - 30
      billion or more CFUs. Probiotics are best taken with meals and apart from
      antibiotics by a few hours. There are several medical conditions where
      science has demonstrated probiotics may be beneficial. A few are listed
      below:
            <ul>
        <li>
          Preventing asthma and allergy in children – Probiotics given to
          mothers during the third trimester of pregnancy and then to the baby
          for the first 6 months after delivery, significantly lessen the chance of
          developing allergic conditions throughout childhood. Lactobacillus
          GG is the bacteria most often used for this purpose. It is given to both
          the mother and the baby. A common brand name is Culturelle. It is
          available at local pharmacies and health food stores.
                </li>
        <li>
          Decreasing gastrointestinal and respiratory infections in children
          in day care - Probiotics given to children in day care promote
          enhanced immune function helping the children to be more resistant to
          infections. Bifidobacteria and Lactobacillus are often used in
          combination for this purpose. Align, Culturelle, and other products are
          available at local pharmacies and health food stores.
                </li>
        <li>
          Reducing irritable bowel syndrome symptoms in adults -
          Probiotics can help to improve gastrointestinal function reducing both
          diarrhea and/or constipation. Align, Culturelle, and other products are
          available for this use.
                </li>
        <li>
          Limiting antibiotic associated diarrhea - Probiotics when taken
          during the time a person is on a course of antibiotics may decrease
          distressing and at times serious causes of diarrhea. Saccharomyces
          boulardii, brand name Florastor, is particularly helpful in limiting this
          type of diarrhea. This too is available at local pharmacies and health
          food stores.
                </li>
      </ul>
    </Typography>
    <Typography className={classes.para}> 
      In the previous century keeping harmful bacteria in check improved human
      health. In the 21st century it is clear that in addition to controlling harmful
      bacteria cultivating healthy bacteria is one of the most important ways to
      protect our health. To cultivate this amazing and protective microbiome eat a
      colorful array of plants, avoid antibiotics, and enjoy fermented foods. These
      foods will feed and protect you and support the wonderful and health
      promoting microorganisms within!
        </Typography>
  </div>
)

export default withStyles(styles)(ProbioticsArticle)
