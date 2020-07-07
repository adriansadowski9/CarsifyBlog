import * as React from 'react'
import { attributes } from 'content/pages/home.md'
import { getArticles, getTips, getAds } from 'utils/getPosts'
import PageHead from 'components/PageHead'
import ArticlesSection from 'components/HomeSections/ArticlesSection'
import TipsSection from 'components/HomeSections/TipsSection'
import InformationSection from 'components/HomeSections/InformationSection'
import AdsSection from 'components/HomeSections/AdsSection'
import ArticleCard from 'components/Cards/ArticleCard'
import TipCard from 'components/Cards/TipCard';
import AdCard from 'components/Cards/AdCard';

const Home = ({ articlesList, tipsList, adsList }) => {
  const { pageTitle, pageDescription } = attributes
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
      <div>
        <ArticlesSection>
          {articlesList.map((article, index) => {
            const { featuredImage, title, highlightedText, category } = article.attributes
            const { slug } = article
            return (
              <ArticleCard
                key={`${title-index}`}
                image={featuredImage}
                title={title}
                textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0,160)}...` : highlightedText}
                category={category}
                slug={slug}
              />
            )})}
        </ArticlesSection>
        <div>
          <TipsSection>
            {tipsList.map((tip, index) => {
              const { featuredImage, title, highlightedText, category } = tip.attributes
              const { slug } = tip
              return (
                <TipCard
                  key={`${title-index}`}
                  image={featuredImage}
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
      </div>
      <AdsSection>
        {adsList.map((ad, index) => {
          const { featuredImage, title, highlightedText, carData } = ad.attributes
          const { slug } = ad
          return (
            <AdCard
              key={`${title-index}`}
              image={featuredImage}
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

Home.getInitialProps = async () => {
  const articlesList = await getArticles({ sort: 'desc', count: 6 })
  const tipsList = await getTips({ sort: 'desc', count: 2 })
  const adsList = await getAds({ sort: 'desc', count: 4 })
  return { articlesList, tipsList, adsList }
}

export default Home
