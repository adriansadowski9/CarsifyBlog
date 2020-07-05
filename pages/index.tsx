import * as React from 'react'
import { attributes } from 'content/pages/home.md'
import { getArticles, getTips, getAds } from 'utils/getPosts'
import PageHead from 'components/PageHead';

const Home = ({ articlesList, tipsList, adsList }) => {
  const { title } = attributes
  return (
    <>
      <PageHead title="Home" description="Home description"/>
      <div>
        <h1>{title}</h1>
        <h3>Articles:</h3>
        <div>
          {articlesList.map((article, index) => {
            const { date, title, highlightedText } = article.attributes
            return (
              <div key={index}>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{highlightedText}</p>
              </div>
            )})}
        </div>
        <h3>Tips:</h3>
        <div>
          {tipsList.map((tip, index) => {
            const { date, title, highlightedText } = tip.attributes
            return (
              <div key={index}>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{highlightedText}</p>
              </div>
            )})}
        </div>
        <h3>Ads:</h3>
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
      </div>
    </>
  )
}

Home.getInitialProps = async () => {
  const articlesList = await getArticles({ sort: 'desc' })
  const tipsList = await getTips({ sort: 'desc' })
  const adsList = await getAds({ sort: 'desc' })
  return { articlesList, tipsList, adsList }
}

export default Home
