import Head from 'next/head'

export default function SEOEnhancedPage () {
  return (
    <>
      <Head>
        <title>Division - Mobil Uygulama Geliştirme</title>
        <meta
          name='description'
          content='Division, mobil uygulama geliştirme hizmetlerinde lider bir şirkettir.'
        />
        <meta
          property='og:title'
          content='Division - Mobil Uygulama Geliştirme'
        />
        <meta
          property='og:description'
          content='Division, mobil uygulama geliştirme hizmetlerinde lider bir şirkettir.'
        />
        <meta property='og:image' content='/images/og-image.png' />
        <meta property='og:url' content='https://www.companydivision.com' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1>SEO Optimize Sayfa</h1>
        <p>Bu sayfa, SEO için optimize edilmiştir.</p>
      </div>
    </>
  )
}
