import Head from 'next/head'
import '../styles/global.css'

export default function MyApp ({ Component, pageProps }) {
  const pageTitle = Component.title || 'Division Company'

  return (
    <>
      <Head>
        <title>{`${pageTitle} - Division Company`}</title>

        <meta
          name='description'
          content='Division Company, modern web ve mobil yazılım çözümleri sunarak işletmelerin dijital dönüşüm süreçlerini kolaylaştırmaktadır. İhtiyacınıza uygun teknolojik çözümler sunuyoruz.'
        />
        <meta
          name='keywords'
          content='Division Company, web yazılım, mobil yazılım, dijital dönüşüm, yazılım geliştirme, teknoloji çözümleri'
        />
        <meta name='author' content='Division Company' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/images/footerlogo.png' type='image/png' />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property='og:title'
          content='Division Company - Web ve Mobil Yazılım Çözümleri'
        />
        <meta
          property='og:description'
          content='Division Company, modern web ve mobil yazılım çözümleri sunarak işletmelerin dijital dönüşüm süreçlerini kolaylaştırmaktadır.'
        />
        <meta property='og:url' content='https://companydivision.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://companydivision.com/images/footerlogo.png'
        />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Division Company - Web ve Mobil Yazılım Çözümleri'
        />
        <meta
          name='twitter:description'
          content='Division Company, modern web ve mobil yazılım çözümleri sunarak işletmelerin dijital dönüşüm süreçlerini kolaylaştırmaktadır.'
        />
        <meta
          name='twitter:image'
          content='https://companydivision.com/images/footerlogo.png'
        />
        <meta name='twitter:site' content='@DivisionCompany' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
