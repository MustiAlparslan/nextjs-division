module.exports = {
  siteUrl: 'https://companydivision.com', // Web sitenizin ana URL'si
  generateRobotsTxt: true, // robots.txt dosyası oluştur
  changefreq: 'daily', // Güncellenme sıklığı
  priority: 0.7, // Varsayılan öncelik
  sitemapSize: 5000, // Tek bir sitemap dosyasında maksimum URL sayısı
  exclude: ['/secret-page'], // Dahil edilmesini istemediğiniz yollar
  alternateRefs: [
    // Çok dilli destek için
    {
      href: 'https://companydivision.com/en',
      hreflang: 'en'
    },
    {
      href: 'https://companydivision.com/tr',
      hreflang: 'tr'
    }
  ]
}
