module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: 'home',
        displayName: 'home',
        link: '/',
        isLink: true,
      },
      {
        name: 'providers',
        displayName: 'providers',
        sublinks: [
          {
            name: 'doctor',
            displayName: 'M. Chris Link, MD',
            link: '/providers/drlink',
            isLink: true,
          },
          {
            name: 'lenon',
            displayName: 'Rachel Lenon, FNP-BC',
            link: '/providers/lenon',
            isLink: true,
          },
          {
            name: 'north',
            displayName: 'Jalyn North, APRN',
            link: '/providers/north',
            isLink: true,
          },
          // {
          //   name: 'tour',
          //   displayName: 'tour',
          //   link: '/about/tour',
          //   isLink: true,
          // },
        ],
        isLink: false,
      },
      {
        name: 'services',
        displayName: 'services',
        sublinks: [
          {
            name: 'acupuncture',
            displayName: 'Acupuncture',
            link: '/services/acupuncture',
            isLink: true,
          },
          {
            name: 'cupping',
            displayName: 'Cupping',
            link: '/services/cupping',
            isLink: true,
          },
          {
            name: 'heartdisease',
            displayName: 'Heart Disease',
            link: '/services/heartDisease',
            isLink: true,
          },
          {
            name: 'funcmed',
            displayName: 'Functional Medicine',
            link: '/services/functionalMed',
            isLink: true,
          },
          {
            name: 'laser',
            displayName: 'Laser',
            link: '/services/lllaser',
            isLink: true,
          },
        ],
        isLink: false,
      },
      {
        name: 'media',
        displayName: 'media',
        sublinks: [
          {
            name: 'Articles',
            displayName: 'Articles',
            link: '/media/articles',
            isLink: true,
          },
          {
            name: 'Radio',
            displayName: 'Radio',
            link: '/media/radio',
            isLink: true,
          },
          {
            name: 'Presentations',
            displayName: 'Presentations',
            link: '/media/presentations',
            isLink: true,
          },
        ],
        isLink: false,
      },
      // {
      //   name: 'the providers',
      //   link: '/providers',
      // },
      // {
      //   name: 'the clinic',
      //   link: '/clinic',
      // },
      {
        name: 'patients',
        displayName: 'for patients',
        link: '/patients',
        isLink: true,
      },
      // {
      //   name: 'articles',
      //   link: '/articles',
      // },
      // {
      //   name: 'radio',
      //   link: '/radio',
      // },
      // {
      //   name: 'talks',
      //   link: '/talks',
      // },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `${__dirname}/src/static/audio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_w.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
