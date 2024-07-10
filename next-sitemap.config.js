module.exports = {
    siteUrl: 'https://www.sensvinylo-musique.fr/',
    generateRobotsTxt: true, // (Optional) Generate robots.txt file
    // Other options
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    additionalPaths: async (config) => [
      {
        loc: '/', // URL de la page d'accueil
        changefreq: 'daily', // Fréquence de changement spécifique pour la page d'accueil
        priority: 1.0, // Priorité spécifique pour la page d'accueil
        lastmod: new Date().toISOString(), // Date de dernière modification
      },
      {
        loc: '/about', // URL de la page 1
        changefreq: 'daily', // Fréquence de changement spécifique
        priority: 0.8, // Priorité spécifique pour cette page
        lastmod: new Date().toISOString(), // Date de dernière modification
      },
    ],
  };
  