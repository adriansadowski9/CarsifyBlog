import * as React from 'react'
import { attributes } from 'content/pages/home.md'
import { Carousel } from 'react-responsive-carousel'
import { getArticles, getTips, getAds } from 'utils/getPosts'
import PageHead from 'components/PageHead'
import ArticlesSection from 'components/HomeSections/ArticlesSection'
import TipsSection from 'components/HomeSections/TipsSection'
import InformationSection from 'components/HomeSections/InformationSection'
import AdsSection from 'components/HomeSections/AdsSection'
import ArticleCard from 'components/Cards/ArticleCard'
import TipCard from 'components/Cards/TipCard'
import AdCard from 'components/Cards/AdCard'
import SectionName from 'components/HomeSections/SectionName'
import InformationCard from 'components/Cards/InformationCard'
import Row from 'components/Layout/styled/Row'

const Home = ({ articlesList, tipsList, infosList, adsList }) => {
  console.log(infosList)
  const { pageTitle, pageDescription } = attributes
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
      <Row>
        <ArticlesSection>
          <SectionName name="Aktualności" />
          {articlesList.map((article, index) => {
            const { featuredImage, title, highlightedText, category } = article.attributes
            const { slug } = article
            return (
              <ArticleCard
                key={`${title}-${index}`}
                image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                title={title}
                textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0,160)}...` : highlightedText}
                category={category}
                slug={slug}
              />
            )})}
        </ArticlesSection>
        <div>
          <TipsSection>
            <SectionName name="Moto porady" />
            {tipsList.map((tip, index) => {
              const { featuredImage, title, highlightedText, category } = tip.attributes
              const { slug } = tip
              return (
                <TipCard
                  key={`${title}-${index}`}
                  image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                  title={title}
                  textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0,160)}...` : highlightedText}
                  category={category}
                  slug={slug}
                />
              )})}
          </TipsSection>
          <InformationSection>
            <SectionName name="Informacje" />
            <Carousel
              infiniteLoop
              autoPlay
              swipeable
              stopOnHover
              emulateTouch
              showThumbs={false}
              renderArrowNext={() => null}
              renderArrowPrev={() => null}
              statusFormatter={() => null}
            >
              {infosList.map((information, index) => {
                const {featuredImage, title, highlightedText} = information.attributes
                const {slug} = information
                return (
                  <InformationCard
                    key={`${title}-${index}`}
                    image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                    title={title}
                    textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0, 160)}...` : highlightedText}
                    slug={slug}
                  />
                )
              })}
            </Carousel>
          </InformationSection>
        </div>
      </Row>
      <Row>
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
      </Row>
    </>
  )
}

Home.getInitialProps = async () => {
  const articlesList = await getArticles({ sort: 'desc', count: 6 })
  const tipsList = await getTips({ sort: 'desc', count: 2 })
  const infosList = await getTips({ sort: 'desc', count: 5, categories: ['Bezpieczeństwo', 'Technika jazdy', 'Eksploatacja', 'Warto wiedzieć']})
  const adsList = await getAds({ sort: 'desc', count: 4 })
  return { articlesList, tipsList, infosList, adsList }
}

export default Home
