const Tip = ({ attributes, isCategory, tipExists }) => {
  if (isCategory) {
    const {title} = attributes
    return (
      <div>
        <span>{title}</span>
      </div>
    )
  } else if (tipExists) {
    const {title, subtitle, date, featuredImage, category, contents, highlightedText, text} = attributes
    return (
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
    )
  } else {
    return (
      <div>
        <span>
          Error
        </span>
      </div>
    )
  }
}

Tip.getInitialProps = async ({ ...props }) => {
  const { tipParam } = props.query
  let markdownFile
  let isCategory
  let tipExists

  try {
    markdownFile = await import(`../../content/categories/tips/${tipParam}.md`)
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
    isCategory,
    tipExists
  }
}

export default Tip
