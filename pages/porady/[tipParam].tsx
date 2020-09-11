import * as React from 'react';
import { useRouter } from 'next/router'
import { getTips } from 'utils/getPosts';
import { getTipCategories } from 'utils/getCategories';

import PageHead from 'components/PageHead';
import SectionName from 'components/Sections/SectionName';
import Categories from 'components/Categories';
import TipCard from 'components/Cards/TipCard';
import Post from 'components/Post';
import TipsSection from 'components/Sections/TipsSection';
import MoreSectionTitle from 'components/Post/styled/MoreSectionTitle';

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
    const router = useRouter()
    const shareUrl = `https://carsify.pl${router.asPath}`

    return (
      <>
        <PageHead title={`Tip - ${title}`} description="Tip description"/>
        <Post date={date} category={category} title={title} subtitle={subtitle} highlightedText={highlightedText} responsiveImage={responsiveImage} shareUrl={shareUrl} text={text} contents={contents}
              moreSection={<TipsSection isHorizontal>
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
              </TipsSection>}
        />
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
