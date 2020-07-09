import * as React from 'react';
import PageHead from 'components/PageHead';
import { getArticles } from 'utils/getPosts';
import { getArticleCategories } from 'utils/getCategories';
import Categories from 'components/Categories';
import ArticleCard from 'components/Cards/ArticleCard';
import ArticlesSection from 'components/HomeSections/ArticlesSection';
import SectionName from 'components/HomeSections/SectionName';

const Article = ({ attributes, articlesList, articleCategories, isCategory, articleExists }) => {
  if(isCategory) {
    const { title, pageTitle, pageDescription } = attributes
    const categories = Array.from(articleCategories, (c: any) => {
      return {
        title: c.attributes.title,
        hrefAs: `/artykuly/${c.slug}`,
        href: '/artykuly/[articleParam]'
      }
    })
    categories.unshift({
      title: 'Wszystkie',
      hrefAs: '/artykuly',
      href: '/artykuly'
    })
    return (
      <>
        <PageHead title={pageTitle} description={pageDescription} />
        <ArticlesSection notEnoughItems={(articlesList.length + 1) % 3 !== 0}>
          <SectionName name={title} />
          <Categories items={categories} height="385px"/>
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
      </>
    )
  } else if (articleExists) {
    const { title, subtitle, date, featuredImage, category, contents, highlightedText, text } = attributes
    return (
      <>
        <PageHead title={`Article - ${title}`} description="Article description"/>
        <article>
          <span>{date}</span>
          <span>{category}</span>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <span>{featuredImage}</span>
          <p>{highlightedText}</p>
          <ul>
            {contents.map((content, index) => (
              <li key={index}><a href={content.link}>{content.name}</a></li>
            ))}
          </ul>
          <p>{text}</p>
        </article>
      </>
    )
  } else {
    return (
      <>
        <PageHead title="Error 404" description="404 description"/>
        <div>
          <span>Error</span>
        </div>
      </>
    )
  }
}

Article.getInitialProps = async ({ ...props }) => {
  const { articleParam } = props.query
  let markdownFile
  let articlesList
  let articleCategories
  let isCategory
  let articleExists

  try {
    markdownFile = await import(`../../content/categories/articles/${articleParam}.md`)
    articlesList = await getArticles({ sort: 'desc', categories: [`${markdownFile.attributes.title}`] })
    articleCategories = await getArticleCategories()
    isCategory = true
  } catch {
    isCategory = false
  }

  if(!isCategory) {
    try {
      markdownFile = await import(`../../content/posts/articles/${articleParam}.md`)
      articleExists = true
    } catch {
      articleExists = false
    }
  }

  return {
    ...markdownFile,
    articlesList,
    articleCategories,
    isCategory,
    articleExists
  }
}

export default Article
