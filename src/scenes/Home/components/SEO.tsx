import * as React from 'react'
import Helmet from 'react-helmet'

const site = {
  name: `Cristiane Berto`,
  description: `Clínica da pele especializada em Micropigmentação de Sobrancelha, tratamentos faciais e corporais.`,
  url: `https://www.cristianeberto.com.br`
}

interface IProps {}

const HomeSEO: React.SFC<IProps> = () => {
  return (
    <Helmet> 
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "WebSite", 
          "url": "${site.url}", 
          "name": "${site.name}",
          "author": {
            "@type": "Person",
            "name": "${site.name}"
          },
          "description": "${site.description}"
        }
      `}</script>
      
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={site.name} />
      <meta property="og:title"       content="Cristiane Berto - Clínica da Pele" />
      <meta property="og:description" content={site.description} />
      <meta property="og:url"         content={site.url} />
      <meta property="og:image"       content={`${site.url}/og_home-image.png`} />
    </Helmet>
  )
}

export default HomeSEO