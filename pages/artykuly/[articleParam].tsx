const Article = ({ attributes, isCategory, articleExists }) => {
  if(isCategory) {
    const { title } = attributes
    return (
      <div>
        <span>{title}</span>
      </div>
    )
  } else if (articleExists) {
    const { title, subtitle, date, featuredImage, category, contents, highlightedText, text } = attributes
    return (
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
    )
  } else {
    return (
      <div><span>Error</span></div>
    )
  }
}

Article.getInitialProps = async ({ ...props }) => {
  const { articleParam } = props.query
  let markdownFile
  let isCategory
  let articleExists

  try {
    markdownFile = await import(`../../content/categories/articles/${articleParam}.md`)
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
    isCategory,
    articleExists
  }
}

export default Article
