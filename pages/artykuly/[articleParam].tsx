import * as React from 'react';
import remark from 'remark';
import remarkHtml from 'remark-html';
import parse from 'html-react-parser';
import PageHead from 'components/PageHead';
import { getArticles } from 'utils/getPosts';
import { getArticleCategories } from 'utils/getCategories';
import Categories from 'components/Categories';
import ArticleCard from 'components/Cards/ArticleCard';
import ArticlesSection from 'components/HomeSections/ArticlesSection';
import SectionName from 'components/HomeSections/SectionName';
import Heading from 'components/Articles/Heading';
import Subheading from 'components/Articles/Subheading';
import ArticleImage from 'components/Articles/ArticleImage';
import TextContainer from 'components/Articles/TextContainer';
import HighlightedText from 'components/Articles/HighlightedText';
import Text from 'components/Articles/Text';
import ContentsList from 'components/Articles/ContentsList';
import ContentsListItem from 'components/Articles/ContentsListItem';
import ContentsTitle from 'components/Articles/ContentsTitle';
import MoreSectionTitle from 'components/Articles/MoreSectionTitle';
import ShareSectionContainer from 'components/Articles/ShareSectionContainer';
import ShareSectionTextContainer from 'components/Articles/ShareSectionTextContainer';
import ShareSectionText from 'components/Articles/ShareSectionText';
import ShareSectionBoldedText from 'components/Articles/ShareSectionBoldedText';

const Article = ({ attributes, articlesList, articleCategories, isCategory, articleExists, moreArticles }) => {
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
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1)
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1260&sizes[]=1640&sizes[]=2520`)
    const textToHtml = remark().use(remarkHtml).processSync(text).toString()
    console.log(textToHtml)
    return (
      <>
        <PageHead title={`Article - ${title}`} description="Article description"/>
        <article>
          <span>{date}</span>
          <span>{category}</span>
          <Heading>{title}</Heading>
          <Subheading>{subtitle}</Subheading>
          <ArticleImage
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(min-width: 1280px) 1260px, (min-width: 1024px) 820px, 100vw"
            alt={title}
          />
          <TextContainer>
            <HighlightedText>{highlightedText}</HighlightedText>
            <ContentsTitle>Spis treści</ContentsTitle>
            <ContentsList>
              {contents.map((content, index) => (
                <ContentsListItem itemsAmount={contents.length} key={index}>
                  <a href={content.link}>{content.name}</a>
                </ContentsListItem>
              ))}
            </ContentsList>
            <Text>{parse(textToHtml)}</Text>
            <ShareSectionContainer>
              <ShareSectionTextContainer>
                <ShareSectionText>Spodobał Ci się ten tekst?</ShareSectionText>
                <ShareSectionBoldedText>Podziel się z innymi!</ShareSectionBoldedText>
              </ShareSectionTextContainer>
            </ShareSectionContainer>
          </TextContainer>
          <ArticlesSection>
            <MoreSectionTitle>Więcej artykułów</MoreSectionTitle>
            {moreArticles.map((article, index) => {
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
  let moreArticles

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
      moreArticles = await getArticles({ sort: 'desc', categories: [`${markdownFile.attributes.category}`], count: 3, excludeSlug: articleParam})
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
    articleExists,
    moreArticles
  }
}

export default Article
