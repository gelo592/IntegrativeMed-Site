import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import mchris from '../images/DrMChrisLink.jpg'
import north from '../images/north.jpg'
import lenon from '../images/lenon.jpg'

const ProvidersPage = () => (
  <Layout>
    <SEO title="providers" />
    <h1>PROVIDERS</h1>
    <h2>M. Chris Link, MD</h2>
    <div>
      <img src={mchris} alt="M. Chris Link" style={{ width: 80, margin: 10 }} />
      <p>
        Dr. Link graduated from St Louis University School of Medicine in 1987.
        He completed emergency medicine residency training at the Medical College of Wisconsin
        in 1991 and practiced emergency and trauma medicine for 18 years.
      </p>
      <p>
        In 2009 he completed a 2-year integrative medicine fellowship at the University of Arizona
        directed by Dr. Andrew Weil.  Additionally, he has completed advanced training in acupuncture,
        anti-aging medicine, functional medicine, nutrition, and both western and Chinese herbal medicine.
        He opened Integrative Medicine - Natural Healing Alternatives and Medical Acupuncture in 2009.
      </p>
      <p>
        He is a respected educator in the field of integrative medicine. He is a clinical instructor
        of integrative medicine in the Capital Region Medical Center Family Medicine Program. He
        lectures frequently on natural approaches to optimizing health. He is a monthly guest on a local radio show
        focusing on health and healing from the natural prospective.
      </p>
      <p>
        The Integrative Medicine Clinic emphasizes optimal nutrition and lifestyle to promote health.
        His overarching belief is that with optimal nutrition, exercise, relaxation,
        and restorative sleep, the human body is designed to heal!
      </p>
      <p>
        The individualized treatment plan will include nutritional and lifestyle recommendations and, when needed, supportive
        supplements and herbs to optimize health and healing. As necessary, we support the healing process with
        the lowest dose of the safest medications available.
      </p>
    </div>
    <h2>Jayln North</h2>
    <div>
      <img src={north} alt="Jayln North" style={{ width: 80, margin: 10 }} />
      <p>
        <b>Jalyn North, APRN,</b> is a family nurse practitioner available to provide 
        primary and integrative healthcare to patients of all ages. She received 
        her Master of Science in Nursing from Maryville University in 2015. 
        She is board certified by the American Academy of Nurse Practitioners. 
        She has completed advanced training in integrative and functional 
        medicine including IFM’s (Institute of Functional Medicine) Applying 
        Functional Medicine in Clinical Practice. She continues on-going advanced 
        training in integrative and functional medicine.
      </p>
      <p>
        Jalyn joins Integrative Medicine Clinic (IMC) with 10 years of experience 
        in the medical field. She most recently served as nurse practitioner for 
        Decatur Medical Group located in Forsyth, Ill., providing primary and acute 
        medical care. Her interest in integrative medicine began while working as 
        a nurse in St. Louis, both in the ER and in ICU, where she saw many 
        chronically ill patients with preventable diseases. Jalyn joined the team 
        at IMC in September of 2017.
      </p>
      <p>
        Jalyn grew up in Columbia and graduated from Rock Bridge Senior High. She 
        now resides in Ashland with her husband and three children. In her spare 
        time, she enjoys hiking and being outdoors, spending time with her family, 
        growing her faith, and watching her kids and nephews play sports. Jalyn 
        believes in a holistic approach to medicine. She provides to patients of 
        all ages who prefer an integrative approach to medicine.
      </p>
    </div>
    <h2>Rachel Lenon</h2>
    <div>
      <img src={lenon} alt="Rachel Lenon" style={{ width: 80, margin: 10 }} />
      <p>
        <b>Rachel Lenon, FNP-BC,</b> is a family nurse practitioner available to 
        provide primary and integrative healthcare to patients of all ages. Rachel 
        received her Master of Science in Nursing in the Family Nurse Practitioner 
        program at the University of Missouri in 2011. She has completed advanced 
        training in integrative and functional medicine including IFM’s (Institute 
        of Functional Medicine) Applying Functional Medicine in Clinical Practice, 
        Advanced Autoimmune Module, and Functional Medicine in Pediatrics Module. 
        She continues on-going advanced training in integrative and functional medicine.
      </p>
      <p>
        Rachel's passion for preventative medicine began while working as an RN 
        in the Cardiac ICU. It was there she saw firsthand the value of prevention 
        and healthy lifestyle to avoid chronic disease. Rachel worked as a nurse 
        practitioner in a family medicine clinic, gaining valuable experience in 
        treating a wide range of both acute and chronic illnesses.
      </p>
      <p>
        Rachel joined the team at the Integrative Medicine Clinic (IMC) in June 
        of 2014. Her goal is to provide a holistic approach to healthcare that 
        focuses on prevention and looking for the root causes of a patient's 
        health concerns, rather than just treating the symptoms. Lifestyle 
        modifications such as stress management, regular exercise, nutrient 
        dense diet, and quality sleep are foundational aspects of the Integrative 
        Medicine approach. She provides to patients of all ages who prefer an 
        integrative approach to medicine.
      </p>
    </div>
  </Layout>
)

export default ProvidersPage
