import * as React from 'react';
import PageHead from 'components/PageHead';

const Ad = ({ attributes, adExists }) => {
  if (adExists) {
    const {title, subtitle, date, featuredImage, carData, contents, highlightedText, text} = attributes
    return (
      <>
        <PageHead title={`Ad - ${title}`} description="Ad description"/>
        <article>
          <span>{date}</span>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <span>{featuredImage}</span>
          <div>
            <p>{carData.name}</p>
            <p>{carData.year}</p>
            <p>{carData.engine}</p>
            <p>{carData.gearbox}</p>
            <p>{carData.hp}</p>
            <p>{carData.torque}</p>
            <p>{carData.doors}</p>
            <p>{carData.course}</p>
            <p>{carData.price}</p>
          </div>
          <p>{highlightedText}</p>
          <ul>
            {contents.map((content) => (
              <li key={content.name}><a href={content.link}>{content.name}</a></li>
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

Ad.getInitialProps = async ({ ...props }) => {
  const { adParam } = props.query
  let markdownFile
  let adExists

  try {
    markdownFile = await import(`../../content/posts/ads/${adParam}.md`)
    adExists = true
  } catch {
    adExists = false
  }
  return {
    ...markdownFile,
    adExists
  }
}

export default Ad
