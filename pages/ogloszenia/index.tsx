import React from 'react';
import dayjs from 'dayjs'
import { attributes } from 'content/pages/ads.md'
import { getAds } from 'utils/getPosts'
import PageHead from 'components/PageHead';
import AdsSection from 'components/Sections/AdsSection'
import AdCard from 'components/Cards/AdCard'
import SectionName from 'components/Sections/SectionName';

const Ads = ({ adsList }) => {
  const { pageTitle, pageDescription } = attributes
  adsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
      <AdsSection>
        <SectionName name="Perełki z ogłoszeń" />
        {adsList.map((ad, index) => {
          const { featuredImage, title, highlightedText, carData } = ad.attributes
          const { slug } = ad
          return (
            <AdCard
              key={`${title}-${index}`}
              image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
              title={title}
              textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0,160)}...` : highlightedText}
              carData={carData}
              slug={slug}
            />
          )})}
      </AdsSection>
    </>
  )
}

Ads.getInitialProps = async () => {
  const adsList = await getAds({ sort: 'desc' })
  return { adsList }
}

export default Ads
