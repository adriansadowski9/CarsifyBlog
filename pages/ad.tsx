import { attributes } from 'content/posts/ads/adPost.md'

const Ad = () => {
  const { title, subtitle, date, featuredImage, category, carData, contents, highlightedText, text } = attributes
  console.log(carData)
  return (
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
  )
}

export default Ad
