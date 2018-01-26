import * as React from 'react'
import Helmet from 'react-helmet'

interface IProps {
  title: string
  headline: string
  image: string
  author: string
  date: {
    published: string
    created: string
    modified: string
  }
  description: string
  body: string
  wordcount: number
  slug: string
  tags: string[]
}

const HomeSEO: React.SFC<IProps> = ({
  title,
  headline,
  image,
  wordcount,
  date,
  description,
  body,
  author,
  slug,
  tags,
}) => {
  const url = `https://cristianeberto.com.br`
  
  return (
    <Helmet title={title}>
      <html prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" />

      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org", 
          "@type": "BlogPosting",
          "headline": "${title}",
          "image": "${url}${image}",
          "genre": "${tags}", 
          "keywords": "${tags}", 
          "wordcount": "${wordcount}",
          "publisher": {
            "@type": "Organization",
            "name": "Cristiane Berto - Clínica da Pele",
            "logo": {
              "@type": "ImageObject",
              "url": "${url}/logo.png"
            }
          },
          "url": "${url}",
          "datePublished": "${date.published}",
          "dateCreated": "${date.created}",
          "dateModified": "${date.modified}",
          "description": "${description}",
          "author": {
            "@type": "Person",
            "name": "${author}"
          },
          "mainEntityOfPage": "${url}${slug}"
        }
      `}</script>
      
      <meta property="og:type"   content="article" /> 
      <meta property="og:url"    content={url + slug} /> 
      <meta property="og:title"  content={title} /> 
      <meta property="og:image"  content={url + image} /> 
      <meta property="og:description" content={description} />
      <meta property="article:author" content={author} />
      <meta property="article:tag"    content={tags.join(' ')} />
      <meta property="article:published_time" content={date.published} />
    </Helmet>
  )
}

export default HomeSEO