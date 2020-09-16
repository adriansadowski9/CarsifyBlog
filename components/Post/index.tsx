import * as React from 'react';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import remark from 'remark';
import remarkHtml from 'remark-html';

import CarDataBox from '@components/Post/styled/CarDataBox';
import CarDataLocalization from '@components/Post/styled/CarDataLocalization';
import CarDataName from '@components/Post/styled/CarDataName';
import CarDataPrice from '@components/Post/styled/CarDataPrice';
import CarDataRow from '@components/Post/styled/CarDataRow';
import ContentsList from '@components/Post/styled/ContentsList';
import ContentsListItem from '@components/Post/styled/ContentsListItem';
import ContentsTitle from '@components/Post/styled/ContentsTitle';
import Heading from '@components/Post/styled/Heading';
import HighlightedText from '@components/Post/styled/HighlightedText';
import IconInfo from '@components/Post/styled/IconInfo';
import PostImage from '@components/Post/styled/PostImage';
import PostImageContainer from '@components/Post/styled/PostImageContainer';
import ShareSectionBoldedText from '@components/Post/styled/ShareSectionBoldedText';
import ShareSectionContainer from '@components/Post/styled/ShareSectionContainer';
import ShareSectionText from '@components/Post/styled/ShareSectionText';
import ShareSectionTextContainer from '@components/Post/styled/ShareSectionTextContainer';
import Subheading from '@components/Post/styled/Subheading';
import Text from '@components/Post/styled/Text';
import TextContainer from '@components/Post/styled/TextContainer';
import TopInfoContainer from '@components/Post/styled/TopInfoContainer';
import SocialShareSection from '@components/SocialShareSection';

interface PostProps {
  date: Date;
  category?: string;
  title: string;
  subtitle: string;
  highlightedText: string;
  responsiveImage: {
    src: string;
    srcSet: string;
  };
  shareUrl: string;
  contents?: {
    name: string;
    link: string;
  }[];
  text: string;
  moreSection?: React.ReactElement;
  carData?: {
    name: string;
    localization: string;
    year: string;
    course: string;
    body: string;
    engine: string;
    hp: string;
    torque: string;
    gearbox: string;
    doors: string;
    price: string;
  };
}

const Post: React.FC<PostProps> = ({
  date,
  category,
  title,
  subtitle,
  highlightedText,
  responsiveImage,
  shareUrl,
  contents,
  text,
  moreSection,
  carData,
}) => {
  const textToHtml = remark().use(remarkHtml).processSync(text).toString();
  return (
    <article>
      <TopInfoContainer>
        <IconInfo text={dayjs(date).format('DD.MM.YYYY')} iconName="d" />
        {category && <IconInfo text={category} iconName="c" />}
      </TopInfoContainer>
      <Heading>{title}</Heading>
      <Subheading>{subtitle}</Subheading>
      <PostImageContainer>
        {!!carData && (
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
              <p>
                {carData.hp} km / {carData.torque} nm
              </p>
            </CarDataRow>
            <CarDataRow>
              <p>Skrzynia biegów</p>
              <p>{carData.gearbox}</p>
            </CarDataRow>
            <CarDataRow>
              <p>Liczba drzwi</p>
              <p>{carData.doors}</p>
            </CarDataRow>
            <CarDataPrice>{carData.price}zł</CarDataPrice>
          </CarDataBox>
        )}
        <PostImage
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          sizes="(min-width: 1280px) 1260px, (min-width: 1024px) 820px, 100vw"
          alt={title}
          notFullWidth={!!carData}
        />
        <SocialShareSection
          shareUrl={shareUrl}
          quote={title}
          pinterestMediaUrl={responsiveImage.src}
          isAbsolute
          rightSide
        />
      </PostImageContainer>
      <TextContainer>
        <HighlightedText>{highlightedText}</HighlightedText>
        {contents && (
          <>
            <ContentsTitle>Spis treści</ContentsTitle>
            <ContentsList>
              {contents.map((content, index) => (
                <ContentsListItem itemsAmount={contents.length} key={index}>
                  <a href={content.link}>{content.name}</a>
                </ContentsListItem>
              ))}
            </ContentsList>
          </>
        )}
        <Text>{parse(textToHtml)}</Text>
        <ShareSectionContainer>
          <ShareSectionTextContainer>
            <ShareSectionText>Spodobał Ci się ten tekst?</ShareSectionText>
            <ShareSectionBoldedText>Podziel się z innymi!</ShareSectionBoldedText>
          </ShareSectionTextContainer>
          <SocialShareSection
            shareUrl={shareUrl}
            quote={title}
            pinterestMediaUrl={responsiveImage.src}
            horizontal
          />
        </ShareSectionContainer>
      </TextContainer>
      {moreSection}
    </article>
  );
};

export default Post;