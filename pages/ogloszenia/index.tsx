import React from 'react';
import dayjs from 'dayjs'
import { attributes } from 'content/pages/ads.md'
import { getAds } from 'utils/getPosts'
import PageHead from 'components/PageHead';

const Ads = ({ adsList }) => {
  const { pageTitle, pageDescription } = attributes
  adsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
      <div>
        {adsList.map((ad, index) => {
          const { date, title, highlightedText } = ad.attributes
          return (
            <div key={index}>
              <p>{date}</p>
              <h3>{title}</h3>
              <p>{highlightedText}</p>
            </div>
          )})}
      </div>
    </>
  )
}

Ads.getInitialProps = async () => {
  const adsList = await getAds({ sort: 'desc' })
  return { adsList }
}

export default Ads
