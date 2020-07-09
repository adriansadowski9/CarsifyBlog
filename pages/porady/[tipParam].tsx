import * as React from 'react';
import { getTips } from 'utils/getPosts';
import { getTipCategories } from 'utils/getCategories';
import PageHead from 'components/PageHead';
import SectionName from 'components/HomeSections/SectionName';
import Categories from 'components/Categories';
import TipCard from 'components/Cards/TipCard';
import TipsSection from 'components/HomeSections/TipsSection';

const Tip = ({ attributes, tipsList, tipCategories, isCategory, tipExists }) => {
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
        <TipsSection isHorizontal notEnoughItems={(tipsList.length + (tipsList.length < 3 ? 1 : 2)) % 3 !== 0}>
          <SectionName name={title} />
          <Categories items={categories} height="825px"/>
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
    return (
      <>
        <PageHead title={`Tip - ${title}`} description="Tip description"/>
        <article>
          <span>{date}</span>
          <span>{category}</span>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <span>{featuredImage}</span>
          <p>{highlightedText}</p>
          <ul>
            {contents.map((content) => (
              <li><a href={content.link}>{content.name}</a></li>
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

Tip.getInitialProps = async ({ ...props }) => {
  const { tipParam } = props.query
  let markdownFile
  let tipsList
  let tipCategories
  let isCategory
  let tipExists

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
    tipExists
  }
}

export default Tip
