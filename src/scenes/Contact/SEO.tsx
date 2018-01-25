import * as React from 'react'
import Helmet from 'react-helmet'

const site = {
  name: `Cristiane Berto`,
  description: `Clínica da pele especializada em Micropigmentação de Sobrancelha, tratamentos faciais e corporais.`,
  url: `https://www.cristianeberto.com.br`
}

interface IProps {}

export class ContactSEO extends React.PureComponent<IProps> {
  render () {
    const {} = this.props

    return (
      <Helmet title="Contato"> 
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Cristiane Berto - Clínica da Pele",
            "url": "${site.url}",
            "logo": "${site.url}/logo.png",
            "foundingDate": "2013",
            "founders": [
              {
                "@type": "Person",
                "name": "Cristiane Berto"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Amazonas, 687",
              "addressLocality": "Belo Horizonte",
              "addressRegion": "MG",
              "postalCode": "30180-000",
              "addressCountry": "BRL"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "telephone": "+55 31 3646-6819",
                "email": "ola@cristianeberto.com.br"
              },
              {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "telephone": "+55 31 99137-0004",
                "email": "ola@cristianeberto.com.br"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/cristianebertooficial/",
              "https://plus.google.com/110177124112976735248"
            ]
          }
        `}</script>
      </Helmet>
    )
  }
}

export default ContactSEO