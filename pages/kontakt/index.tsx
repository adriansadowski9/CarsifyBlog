import * as React from 'react'
import { attributes } from 'content/pages/contact.md'
import PageHead from 'components/PageHead'

const Contact = () => {
  const { pageTitle, pageDescription, contactEmail, facebookUrl, twitterUrl, instagramUrl } = attributes
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
      <div>
        <h3>Kontakt:</h3>
        <div>
          <p>{contactEmail}</p>
          <p>{facebookUrl}</p>
          <p>{twitterUrl}</p>
          <p>{instagramUrl}</p>
        </div>
      </div>
    </>
  )
}

export default Contact
