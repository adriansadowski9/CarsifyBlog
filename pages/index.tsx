import * as React from 'react'
import { attributes } from 'content/pages/home.md'
import { getArticles, getTips, getAds } from 'utils/getPosts'
import PageHead from 'components/PageHead'
import ArticlesSection from 'components/HomeSections/ArticlesSection'
import TipsSection from 'components/HomeSections/TipsSection'
import InformationSection from 'components/HomeSections/InformationSection'
import AdsSection from 'components/HomeSections/AdsSection'
import ArticleCard from 'components/Cards/ArticleCard'

const Home = ({ articlesList, tipsList, adsList }) => {
  const { pageTitle, pageDescription } = attributes
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
      <div>
        <ArticlesSection>
          {articlesList.map((article, index) => {
            const { featuredImage, title, highlightedText } = article.attributes
            const { slug } = article
            return (
              <ArticleCard key={`${title-index}`} image={featuredImage} title={title} textSnippet={highlightedText} category="Kategoria" slug={slug}/>
            )})}
        </ArticlesSection>
        <div>
          <TipsSection>
            {tipsList.map((tip, index) => {
              const { date, title, highlightedText } = tip.attributes
              return (
                <div key={index}>
                  <p>{date}</p>
                  <h3>{title}</h3>
                  <p>{highlightedText}</p>
                </div>
              )})}
          </TipsSection>
          <InformationSection>

          </InformationSection>
        </div>
      </div>
      <AdsSection>
        {adsList.map((ad, index) => {
          const { date, title, highlightedText } = ad.attributes
          return (
            <div key={index}>
              <p>{date}</p>
              <h3>{title}</h3>
              <p>{highlightedText}</p>
            </div>
          )})}
      </AdsSection>
    </>
  )
}

Home.getInitialProps = async () => {
  const articlesList = await getArticles({ sort: 'desc', count: 6 })
  const tipsList = await getTips({ sort: 'desc' })
  const adsList = await getAds({ sort: 'desc', count: 4 })
  return { articlesList, tipsList, adsList }
}

export default Home
