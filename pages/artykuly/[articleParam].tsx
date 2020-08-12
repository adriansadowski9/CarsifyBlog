import * as React from 'react';
import dayjs from 'dayjs';
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
import IconInfo from 'components/Post/IconInfo';
import Heading from 'components/Post/Heading';
import Subheading from 'components/Post/Subheading';
import PostImage from 'components/Post/PostImage';
import TextContainer from 'components/Post/TextContainer';
import HighlightedText from 'components/Post/HighlightedText';
import Text from 'components/Post/Text';
import ContentsList from 'components/Post/ContentsList';
import ContentsListItem from 'components/Post/ContentsListItem';
import ContentsTitle from 'components/Post/ContentsTitle';
import MoreSectionTitle from 'components/Post/MoreSectionTitle';
import ShareSectionContainer from 'components/Post/ShareSectionContainer';
import ShareSectionTextContainer from 'components/Post/ShareSectionTextContainer';
import ShareSectionText from 'components/Post/ShareSectionText';
import ShareSectionBoldedText from 'components/Post/ShareSectionBoldedText';
import PostImageContainer from 'components/Post/PostImageContainer';
import SocialShareContainer from 'components/SocialShareSection/SocialShareContainer';
import TopInfoContainer from 'components/Post/TopInfoContainer';

const Article = ({attributes, articlesList, articleCategories, isCategory, articleExists, moreArticles}) => {
  if (isCategory) {
    const {title, pageTitle, pageDescription} = attributes
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
        <PageHead title={pageTitle} description={pageDescription}/>
        <ArticlesSection notEnoughItems={(articlesList.length + 1) % 3 !== 0}>
          <SectionName name={title}/>
          <Categories items={categories} height="385px"/>
          {articlesList.map((article, index) => {
            const {featuredImage, title, highlightedText, category} = article.attributes
            const {slug} = article
            return (
              <ArticleCard
                key={`${title}-${index}`}
                image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                title={title}
                textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0, 160)}...` : highlightedText}
                category={category}
                slug={slug}
              />
            )
          })}
        </ArticlesSection>
      </>
    )
  } else if (articleExists) {
    const {title, subtitle, date, featuredImage, category, contents, highlightedText, text} = attributes
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1)
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1260&sizes[]=1640&sizes[]=2520`)
    const textToHtml = remark().use(remarkHtml).processSync(text).toString()
    const shareUrl = 'http://github.com';
    return (
      <>
        <PageHead title={`Article - ${title}`} description="Article description"/>
        <article>
          <TopInfoContainer>
            <IconInfo text={dayjs(date).format('DD.MM.YYYY')} iconName="d"/>
            <IconInfo text={category} iconName="c"/>
          </TopInfoContainer>
          <Heading>{title}</Heading>
          <Subheading>{subtitle}</Subheading>
          <PostImageContainer>
            <PostImage
              src={responsiveImage.src}
              srcSet={responsiveImage.srcSet}
              sizes="(min-width: 1280px) 1260px, (min-width: 1024px) 820px, 100vw"
              alt={title}
            />
            <SocialShareContainer shareUrl={shareUrl}
                                  quote={title}
                                  pinterestMediaUrl={responsiveImage.src}
                                  isAbsolute
            />
          </PostImageContainer>
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
              <SocialShareContainer shareUrl={shareUrl} quote={title}
                                    pinterestMediaUrl={responsiveImage.src} horizontal/>
            </ShareSectionContainer>
          </TextContainer>
          <ArticlesSection>
            <MoreSectionTitle>Więcej artykułów</MoreSectionTitle>
            {moreArticles.map((article, index) => {
              const {featuredImage, title, highlightedText, category} = article.attributes
              const {slug} = article
              return (
                <ArticleCard
                  key={`${title}-${index}`}
                  image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                  title={title}
                  textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0, 160)}...` : highlightedText}
                  category={category}
                  slug={slug}
                />
              )
            })}
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

Article.getInitialProps = async ({...props}) => {
  const { articleParam } = props.query
  let markdownFile
  let articlesList
  let articleCategories
  let isCategory
  let articleExists
  let moreArticles

  try {
    markdownFile = await import(`../../content/categories/articles/${articleParam}.md`)
    articlesList = await getArticles({sort: 'desc', categories: [`${markdownFile.attributes.title}`]})
    articleCategories = await getArticleCategories()
    isCategory = true
  } catch {
    isCategory = false
  }

  if (!isCategory) {
    try {
      markdownFile = await import(`../../content/posts/articles/${articleParam}.md`)
      moreArticles = await getArticles({
        sort: 'desc',
        categories: [`${markdownFile.attributes.category}`],
        count: 3,
        excludeSlug: articleParam
      })
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
