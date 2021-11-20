const {
   NODE_ENV,
   URL: NETLIFY_SITE_URL = 'https://xmdb.dev',
   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
   CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
const config = require('./src/config');

module.exports = {
   siteMetadata: {
      siteUrl,
      title: 'Matthew Griffin - Portfolio',
   },
   plugins: [
      {
         resolve: 'gatsby-plugin-google-gtag',
         options: {
            trackingIds: ['G-KDFQFND2W5'], // TODO: change to new GA tracking ID
            gtagConfig: {
               optimize_id: 'OPT_CONTAINER_ID',
               anonymize_ip: true,
               cookie_expires: 0,
            },
            pluginConfig: {
               head: false,
               respectDNT: false,
               exclude: ['/sitemap.xml'],
            },
         },
      },
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            name: `Matthew Griffin - Portfolio`,
            short_name: `Matthew Griffin`,
            start_url: `/`,
            background_color: config.colours.darkNavy,
            theme_color: config.colours.navy,
            display: `standalone`,
            icon: `src/images/logo.png`,
            crossOrigin: `use-credentials`,
         },
      },
      'gatsby-plugin-offline',
      'gatsby-plugin-react-helmet',
      {
         resolve: 'gatsby-plugin-robots-txt',
         options: {
            resolveEnv: () => NETLIFY_ENV,
            env: {
               production: {
                  policy: [{ userAgent: '*' }],
               },
               'branch-deploy': {
                  policy: [{ userAgent: '*', disallow: ['/'] }],
                  sitemap: null,
                  host: null,
               },
               'deploy-preview': {
                  policy: [{ userAgent: '*', disallow: ['/'] }],
                  sitemap: null,
                  host: null,
               },
            },
         },
      },
      'gatsby-plugin-styled-components',
      {
         resolve: 'gatsby-plugin-typescript',
         options: {
            isTSX: true,
            jsxPragma: `jsx`,
            allExtensions: true,
         },
      },

      // {
      //    resolve: `gatsby-source-filesystem`,
      //    options: {
      //       name: `images`,
      //       path: `${__dirname}/src/images`,
      //    },
      // },
      // {
      //    resolve: 'gatsby-source-filesystem',
      //    options: {
      //       name: 'content',
      //       path: `${__dirname}/content/`,
      //    },
      // },
      // {
      //    resolve: `gatsby-source-filesystem`,
      //    options: {
      //       name: `posts`,
      //       path: `${__dirname}/content/posts`,
      //    },
      // },
      // {
      //    resolve: `gatsby-source-filesystem`,
      //    options: {
      //       name: `projects`,
      //       path: `${__dirname}/content/projects`,
      //    },
      // },
   ],
};
