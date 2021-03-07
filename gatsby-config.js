// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Team Fuji`,
    teamtitle: `經過Fuji培訓出來的企業夥伴包括有`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
