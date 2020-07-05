import React from 'react';
import { getArticles } from 'utils/getPosts'
import PageHead from 'components/PageHead';

const Articles = ({ articlesList }) => {
  return (
    <>
      <PageHead title="Artykuly" description="Artykuly description"/>
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
    </>
  )
}

Articles.getInitialProps = async () => {
  const articlesList = await getArticles({ sort: 'desc' })
  return { articlesList }
}

export default Articles
