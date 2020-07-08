import * as React from 'react'
import { attributes } from 'content/pages/home.md'
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
import Row from 'components/Layout/styled/Row';

const Home = ({ articlesList, tipsList, adsList }) => {
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
            console.log(featuredImage)
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
  const adsList = await getAds({ sort: 'desc', count: 4 })
  return { articlesList, tipsList, adsList }
}

export default Home
