import { attributes } from 'content/posts/articles/articlesPost.md'

const Article = () => {
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
        {contents.map((content) => (
          <li><a href={content.link}>{content.name}</a></li>
        ))}
      </ul>
      <p>{text}</p>
    </article>
  )
}

export default Article
