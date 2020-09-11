import * as React from 'react'
import dayjs from 'dayjs'
import { attributes } from 'content/pages/ads.md'
import { getTips } from 'utils/getPosts'
import { getTipCategories } from 'utils/getCategories'
import PageHead from 'components/PageHead'
import TipsSection from 'components/Sections/TipsSection'
import TipCard from 'components/Cards/TipCard'
import Categories from 'components/Categories';
import SectionName from 'components/Sections/SectionName';

const Tips = ({ tipsList, tipCategories }) => {
  const { pageTitle, pageDescription } = attributes
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
  tipsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
      <SectionName name="Moto porady" />
      <TipsSection hasCategories isHorizontal>
        <Categories items={categories} height="895px"/>
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
}

Tips.getInitialProps = async () => {
  const tipsList = await getTips({ sort: 'desc' })
  const tipCategories = await getTipCategories()
  return { tipsList, tipCategories }
}

export default Tips
