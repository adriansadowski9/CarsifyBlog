import * as React from 'react';
import { useRouter } from 'next/router'
import dayjs from 'dayjs';
import remark from 'remark';
import remarkHtml from 'remark-html';
import parse from 'html-react-parser';
import { getTips } from 'utils/getPosts';
import { getTipCategories } from 'utils/getCategories';
import PageHead from 'components/PageHead';
import SectionName from 'components/HomeSections/SectionName';
import Categories from 'components/Categories';
import TipCard from 'components/Cards/TipCard';
import TipsSection from 'components/HomeSections/TipsSection';
import TopInfoContainer from 'components/Post/TopInfoContainer';
import IconInfo from 'components/Post/IconInfo';
import Heading from 'components/Post/Heading';
import Subheading from 'components/Post/Subheading';
import PostImageContainer from 'components/Post/PostImageContainer';
import PostImage from 'components/Post/PostImage';
import SocialShareSection from 'components/SocialShareSection';
import TextContainer from 'components/Post/TextContainer';
import HighlightedText from 'components/Post/HighlightedText';
import ContentsTitle from 'components/Post/ContentsTitle';
import ContentsList from 'components/Post/ContentsList';
import ContentsListItem from 'components/Post/ContentsListItem';
import Text from 'components/Post/Text';
import ShareSectionContainer from 'components/Post/ShareSectionContainer';
import ShareSectionTextContainer from 'components/Post/ShareSectionTextContainer';
import ShareSectionText from 'components/Post/ShareSectionText';
import ShareSectionBoldedText from 'components/Post/ShareSectionBoldedText';
import MoreSectionTitle from 'components/Post/MoreSectionTitle';

const Tip = ({ attributes, tipsList, tipCategories, isCategory, tipExists, moreTips }) => {
  if (isCategory) {
    const { title, pageTitle, pageDescription } = attributes
    const categories = Array.from(tipCategories, (c: any) => {
      return {
        title: c.attributes.title,
        hrefAs: `/porady/${c.slug}`,
        href: '/porady/[tipParam]'
      }
    })
    categories.unshift({
      title: 'Wszystkie',
      hrefAs: '/porady',
      href: '/porady'
    })
    return (
      <>
        <PageHead title={pageTitle} description={pageDescription} />
        <SectionName name={title} />
        <TipsSection hasCategories isHorizontal>
          <Categories items={categories} height={categories.length > 5 ? '895px' : '385px'} />
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
      </>
    )
  } else if (tipExists) {
    const {title, subtitle, date, featuredImage, category, contents, highlightedText, text} = attributes
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1)
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1260&sizes[]=1640&sizes[]=2520`)
    const textToHtml = remark().use(remarkHtml).processSync(text).toString()
    const router = useRouter()
    const shareUrl = `https://carsify.pl${router.asPath}`

    return (
      <>
        <PageHead title={`Tip - ${title}`} description="Tip description"/>
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
            <SocialShareSection shareUrl={shareUrl}
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
              <SocialShareSection shareUrl={shareUrl} quote={title}
                                    pinterestMediaUrl={responsiveImage.src} horizontal/>
            </ShareSectionContainer>
          </TextContainer>
          <TipsSection isHorizontal>
            <MoreSectionTitle>Więcej porad</MoreSectionTitle>
            {moreTips.map((article, index) => {
              const {featuredImage, title, highlightedText, category} = article.attributes
              const {slug} = article
              return (
                <TipCard
                  key={`${title}-${index}`}
                  image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                  title={title}
                  textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0, 160)}...` : highlightedText}
                  category={category}
                  slug={slug}
                />
              )
            })}
          </TipsSection>
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

Tip.getInitialProps = async ({ ...props }) => {
  const { tipParam } = props.query
  let markdownFile
  let tipsList
  let tipCategories
  let isCategory
  let tipExists
  let moreTips

  try {
    markdownFile = await import(`../../content/categories/tips/${tipParam}.md`)
    tipsList = await getTips({ sort: 'desc', categories: [`${markdownFile.attributes.title}`] })
    tipCategories = await getTipCategories()
    isCategory = true
  } catch {
    isCategory = false
  }

  if(!isCategory) {
    try {
      markdownFile = await import(`../../content/posts/tips/${tipParam}.md`)
      moreTips = await getTips({
        sort: 'desc',
        categories: [`${markdownFile.attributes.category}`],
        count: 3,
        excludeSlug: tipParam
      })
      tipExists = true
    } catch {
      tipExists = false
    }
  }

  return {
    ...markdownFile,
    tipsList,
    tipCategories,
    isCategory,
    tipExists,
    moreTips
  }
}

export default Tip
