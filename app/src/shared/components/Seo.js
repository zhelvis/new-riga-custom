import React from 'react'
import Helmet from 'react-helmet'

export default function Head({ description, title }) {
  const locale = 'ru'

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={`New Riga Custom | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: locale,
        },
      ]}
    />
  )
}
