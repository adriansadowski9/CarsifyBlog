import * as React from 'react';
import { ReactElement } from 'react';
import ImageGallery from 'react-image-gallery';
import Linkify from 'react-linkify';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import showdown from 'showdown';

import Breadcrumbs, { BreadcrumbsItem } from '@components/Breadcrumbs';
import CarDataBox from '@components/Post/styled/CarDataBox';
import CarDataLocalization from '@components/Post/styled/CarDataLocalization';
import CarDataName from '@components/Post/styled/CarDataName';
import CarDataPrice from '@components/Post/styled/CarDataPrice';
import CarDataRow from '@components/Post/styled/CarDataRow';
import CarDataRowTitle from '@components/Post/styled/CarDataRowTitle';
import ContentsList from '@components/Post/styled/ContentsList';
import ContentsListItem from '@components/Post/styled/ContentsListItem';
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
import IconName from '@utils/iconNames';

type ResponsiveImage = {
  src: string;
  srcSet: string;
  images: {
    path: string;
    width: number;
    height: number;
  }[];
};

interface PostProps {
  date: Date;
  category?: {
    name: string;
    icon: IconName;
  };
  breadcrumbs: BreadcrumbsItem[];
  title: string;
  subtitle: string;
  highlightedText: string;
  responsiveImage: ResponsiveImage;
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
  galleryImages: {
    image: ResponsiveImage;
    alt: string;
  }[];
}

const Post: React.FC<PostProps> = ({
  date,
  category,
  breadcrumbs,
  title,
  subtitle,
  highlightedText,
  responsiveImage,
  shareUrl,
  contents,
  text,
  moreSection,
  carData,
  galleryImages,
}) => {
  showdown.extension('SeeAlso', {
    type: 'output',
    filter: (text: string) => {
      const mainRegex = new RegExp('(^[ \t]*<p>:-&gt[ \t]?.+)', 'gm');
      return text.replace(mainRegex, (content) => {
        content = content.replace(/^([ \t]*)<p>:-&gt;([ \t])?/gm, '');
        return `<aside class="see-also"><p>${content}</aside>`;
      });
    },
  });

  showdown.extension('AddGallery', {
    type: 'output',
    filter: (text: string) => {
      const mainRegex = new RegExp('(^[ \t]*<p>:-gallery&gt;[ \t]?.+)', 'gm');
      return text.replace(mainRegex, galleryImages.length ? `<div id="post-gallery"></div>` : '');
    },
  });

  const mdConverter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    customizedHeaderId: true,
    simplifiedAutoLink: true,
    extensions: ['SeeAlso', 'AddGallery'],
  });
  const images = galleryImages
    ? galleryImages.map((galleryItem) => ({
        original: galleryItem.image.images[galleryItem.image.images.length - 1].path,
        thumbnail: galleryItem.image.images[0].path,
        originalAlt: galleryItem.alt,
        thumbnailAlt: `${galleryItem.alt} (miniatura)`,
      }))
    : [];

  const turnIntoGallery = (parsedHtml: ReactElement[] | ReactElement) => {
    if (Array.isArray(parsedHtml)) {
      const indexToReplace = [];
      // FIND ALL GALLERY USAGES
      parsedHtml.forEach(
        (element, index) =>
          element.type === 'div' &&
          element.props.id === 'post-gallery' &&
          indexToReplace.push(index)
      );
      // CHANGE PLACEHOLDER DIV INTO GALLERY
      indexToReplace.forEach(
        (index) =>
          (parsedHtml[index] = (
            <ImageGallery items={images} key={parsedHtml[index].key} showPlayButton={false} />
          ))
      );
      return parsedHtml;
    } else if (parsedHtml.type === 'div' && parsedHtml.props.id === 'post-gallery') {
      return <ImageGallery items={images} showPlayButton={false} />;
    } else {
      return parsedHtml;
    }
  };

  const parseToHtml = (text) => {
    const parsedHtml = parse(mdConverter.makeHtml(text));
    if (galleryImages.length) {
      return turnIntoGallery(parsedHtml);
    } else {
      return parsedHtml;
    }
  };

  return (
    <article>
      <TopInfoContainer>
        <IconInfo text={dayjs(date).format('DD.MM.YYYY')} iconName={IconName.Calendar} />
        {category && <IconInfo text={category.name} iconName={category.icon} />}
      </TopInfoContainer>
      <Breadcrumbs items={breadcrumbs} />
      <Heading>{title}</Heading>
      <Subheading>{subtitle}</Subheading>

      <PostImageContainer isCarData={!!carData}>
        {!!carData && (
          <CarDataBox>
            <CarDataName>{carData.name}</CarDataName>
            <CarDataLocalization>
              <p>{carData.localization}</p>
            </CarDataLocalization>
            <CarDataRow>
              <CarDataRowTitle>Rok produkcji</CarDataRowTitle>
              <p>{carData.year}</p>
            </CarDataRow>
            <CarDataRow>
              <CarDataRowTitle>Przebieg</CarDataRowTitle>
              <p>{carData.course} km</p>
            </CarDataRow>
            <CarDataRow>
              <CarDataRowTitle>Nadwozie</CarDataRowTitle>
              <p>{carData.body}</p>
            </CarDataRow>
            <CarDataRow>
              <CarDataRowTitle>Silnik</CarDataRowTitle>
              <p>{carData.engine}</p>
            </CarDataRow>
            <CarDataRow>
              <CarDataRowTitle>Moc</CarDataRowTitle>
              <p>
                {carData.hp} KM / {carData.torque} Nm
              </p>
            </CarDataRow>
            <CarDataRow>
              <CarDataRowTitle>Skrzynia biegów</CarDataRowTitle>
              <p>{carData.gearbox}</p>
            </CarDataRow>
            <CarDataRow>
              <CarDataRowTitle>Liczba drzwi</CarDataRowTitle>
              <p>{carData.doors}</p>
            </CarDataRow>
            <CarDataPrice>{carData.price}</CarDataPrice>
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
          rightSide={!!carData}
          isAbsolute
        />
      </PostImageContainer>
      <TextContainer>
        <HighlightedText>
          <Linkify>{highlightedText}</Linkify>
        </HighlightedText>
        {contents && (
          <ContentsList>
            {contents.map((content, index) => (
              <ContentsListItem key={index}>
                <a href={content.link}>{content.name}</a>
              </ContentsListItem>
            ))}
          </ContentsList>
        )}
        <Text>{parseToHtml(text)}</Text>
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
