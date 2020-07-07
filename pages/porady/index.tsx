import * as React from 'react'
import dayjs from 'dayjs'
import { attributes } from 'content/pages/ads.md'
import { getTips } from 'utils/getPosts'
import PageHead from 'components/PageHead'

const Tips = ({ tipsList }) => {
  const { pageTitle, pageDescription } = attributes
  tipsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription}/>
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
    </>
  )
}

Tips.getInitialProps = async () => {
  const tipsList = await getTips({ sort: 'desc' })
  return { tipsList }
}

export default Tips
