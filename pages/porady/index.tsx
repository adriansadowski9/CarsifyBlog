import dayjs from 'dayjs'
import { getTips } from 'utils/getPosts'

const Tips = ({ tipsList }) => {
  tipsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  return (
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
  )
}

Tips.getInitialProps = async () => {
  const tipsList = await getTips({ sort: 'desc' })
  return { tipsList }
}

export default Tips
