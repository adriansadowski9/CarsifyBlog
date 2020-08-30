import * as React from 'react';
import { useRouter } from 'next/router'
import dayjs from 'dayjs';
import remark from 'remark';
import remarkHtml from 'remark-html';
import parse from 'html-react-parser';
import {getAds} from 'utils/getPosts';
import AdCard from 'components/Cards/AdCard';
import PageHead from 'components/PageHead';
import TopInfoContainer from 'components/Post/TopInfoContainer';
import IconInfo from 'components/Post/IconInfo';
import Heading from 'components/Post/Heading';
import Subheading from 'components/Post/Subheading';
import PostImageContainer from 'components/Post/PostImageContainer';
import PostImage from 'components/Post/PostImage';
import TextContainer from 'components/Post/TextContainer';
import HighlightedText from 'components/Post/HighlightedText';
import ContentsTitle from 'components/Post/ContentsTitle';
import ContentsList from 'components/Post/ContentsList';
import ContentsListItem from 'components/Post/ContentsListItem';
import Text from 'components/Post/Text';
import ShareSectionContainer from 'components/Post/ShareSectionContainer';
import ShareSectionTextContainer from 'components/Post/ShareSectionTextContainer';
import ShareSectionText from 'components/Post/ShareSectionText';
import ShareSectionBoldedText from 'components/Post/ShareSectionBoldedText';
import TipsSection from 'components/HomeSections/TipsSection';
import MoreSectionTitle from 'components/Post/MoreSectionTitle';
import CarDataBox from 'components/Post/CarDataBox';
import CarDataName from 'components/Post/CarDataName';
import CarDataLocalization from 'components/Post/CarDataLocalization';
import CarDataRow from 'components/Post/CarDataRow';
import CarDataPrice from 'components/Post/CarDataPrice';
import SocialShareSection from 'components/SocialShareSection';

const Ad = ({attributes, adExists, moreAds}) => {
  if (adExists) {
    const {title, subtitle, date, featuredImage, carData, contents, highlightedText, text} = attributes
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1)
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1260&sizes[]=1640&sizes[]=2520`)
    const textToHtml = remark().use(remarkHtml).processSync(text).toString()
    const router = useRouter()
    const shareUrl = `https://carsify.pl${router.asPath}`;

    return (
      <>
        <PageHead title={`Ad - ${title}`} description="Ad description"/>
        <article>
          <TopInfoContainer>
            <IconInfo text={dayjs(date).format('DD.MM.YYYY')} iconName="d"/>
          </TopInfoContainer>
          <Heading>{title}</Heading>
          <Subheading>{subtitle}</Subheading>
          <PostImageContainer>
            <CarDataBox>
              <CarDataName>{carData.name}</CarDataName>
              <CarDataLocalization>
                <p>{carData.localization}</p>
              </CarDataLocalization>
              <CarDataRow>
                <p>Rok produkcji</p>
                <p>{carData.year}</p>
              </CarDataRow>
              <CarDataRow>
                <p>Przebieg</p>
                <p>{carData.course} km</p>
              </CarDataRow>
              <CarDataRow>
                <p>Nadwozie</p>
                <p>{carData.body}</p>
              </CarDataRow>
              <CarDataRow>
                <p>Silnik</p>
                <p>{carData.engine}</p>
              </CarDataRow>
              <CarDataRow>
                <p>Moc</p>
                <p>{carData.hp} km / {carData.torque} nm</p>
              </CarDataRow>
              <CarDataRow>
                <p>Skrzynia biegów</p>
                <p>{carData.gearbox}</p>
              </CarDataRow>
              <CarDataRow>
                <p>Liczba drzwi</p>
                <p>{carData.doors}</p>
              </CarDataRow>
              <CarDataPrice>
                {carData.price}zł
              </CarDataPrice>
            </CarDataBox>
            <PostImage
              src={responsiveImage.src}
              srcSet={responsiveImage.srcSet}
              sizes="(min-width: 1280px) 1260px, (min-width: 1024px) 820px, 100vw"
              alt={title}
              notFullWidth
            />
            <SocialShareSection shareUrl={shareUrl}
                                  quote={title}
                                  pinterestMediaUrl={responsiveImage.src}
                                  isAbsolute
                                  rightSide
            />
          </PostImageContainer>
          <TextContainer>
            <HighlightedText>{highlightedText}</HighlightedText>
            <ContentsTitle>Spis treści</ContentsTitle>
            <ContentsList>
              {contents.map((content, index) => (
                <ContentsListItem itemsAmount={contents.length} key={index}>
                  <a href={content.link}>{content.name}</a>
                </ContentsListItem>
              ))}
            </ContentsList>
            <Text>{parse(textToHtml)}</Text>
            <ShareSectionContainer>
              <ShareSectionTextContainer>
                <ShareSectionText>Spodobał Ci się ten tekst?</ShareSectionText>
                <ShareSectionBoldedText>Podziel się z innymi!</ShareSectionBoldedText>
              </ShareSectionTextContainer>
              <SocialShareSection shareUrl={shareUrl} quote={title}
                                    pinterestMediaUrl={responsiveImage.src} horizontal/>
            </ShareSectionContainer>
          </TextContainer>
          <TipsSection isHorizontal>
            <MoreSectionTitle>Więcej perełek z ogłoszeń</MoreSectionTitle>
            {moreAds.map((article, index) => {
              const {featuredImage, title, highlightedText, carData} = article.attributes
              const {slug} = article
              return (
                <AdCard
                  key={`${title}-${index}`}
                  image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                  carData={carData}
                  title={title}
                  textSnippet={highlightedText.length > 160 ? `${highlightedText.substring(0, 160)}...` : highlightedText}
                  slug={slug}
                />
              )
            })}
          </TipsSection>
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

Ad.getInitialProps = async ({...props}) => {
  const {adParam} = props.query
  let markdownFile
  let moreAds
  let adExists

  try {
    markdownFile = await import(`../../content/posts/ads/${adParam}.md`)
    moreAds = await getAds({
      sort: 'desc',
      count: 4,
      excludeSlug: adParam
    })
    adExists = true
  } catch {
    adExists = false
  }
  return {
    ...markdownFile,
    moreAds,
    adExists
  }
}

export default Ad
