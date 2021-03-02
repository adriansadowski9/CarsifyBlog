import * as React from 'react';
import { ReactElement } from 'react';
import ImageGallery from 'react-image-gallery';
import Linkify from 'react-linkify';
import dayjs from 'dayjs';
import Image from 'next/image';
import showdown from 'showdown';
import textFit from 'textfit';
import { getImage } from '@plaiceholder/next';
import { getPixelsCSS, PixelsCSS } from '@plaiceholder/css';

import Breadcrumbs, { BreadcrumbsItem } from '@components/Breadcrumbs';
import HyvorTalkComments from '@components/HyvorTalkComments';
import Icon from '@components/Icon';
import CarDataBox from '@components/Post/styled/CarDataBox';
import CarDataLocalization from '@components/Post/styled/CarDataLocalization';
import CarDataName from '@components/Post/styled/CarDataName';
import CarDataPrice from '@components/Post/styled/CarDataPrice';
import CarDataRow from '@components/Post/styled/CarDataRow';
import CarDataRowTitle from '@components/Post/styled/CarDataRowTitle';
import ContentsList from '@components/Post/styled/ContentsList';
import ContentsListItem from '@components/Post/styled/ContentsListItem';
import GalleryButton from '@components/Post/styled/GalleryButton';
import Heading from '@components/Post/styled/Heading';
import HighlightedText from '@components/Post/styled/HighlightedText';
import IconInfo from '@components/Post/styled/IconInfo';
import ImageContainer from '@components/Post/styled/ImageContainer';
import ImageGalleryContainer from '@components/Post/styled/ImageGalleryContainer';
import ImageSource from '@components/Post/styled/ImageSource';
import PostImageContainer from '@components/Post/styled/PostImageContainer';
import ShareSectionBoldedText from '@components/Post/styled/ShareSectionBoldedText';
import ShareSectionContainer from '@components/Post/styled/ShareSectionContainer';
import ShareSectionText from '@components/Post/styled/ShareSectionText';
import ShareSectionTextContainer from '@components/Post/styled/ShareSectionTextContainer';
import Subheading from '@components/Post/styled/Subheading';
import Text from '@components/Post/styled/Text';
import TextContainer from '@components/Post/styled/TextContainer';
import TextImageContainer from '@components/Post/styled/TextImageContainer';
import TopInfoContainer from '@components/Post/styled/TopInfoContainer';
import SocialShareSection from '@components/SocialShareSection';
import DarkModeContext from '@contexts/darkModeContext';
import appendScript from '@utils/appendScript';
import IconName from '@utils/iconNames';
import { darkTheme, lightTheme } from '@utils/theme';
import parse from 'html-react-parser';

interface PostProps {
  date: Date;
  category?: {
    name: string;
    icon: IconName;
    href: string;
    slug: string;
  };
  breadcrumbs: BreadcrumbsItem[];
  title: string;
  subtitle: string;
  highlightedText: string;
  image: string;
  imagePlaceholder: PixelsCSS;
  imageSource?: string;
  shareUrl: string;
  contents?: {
    name: string;
    link: string;
  }[];
  text: string;
  textImagesPlaceholders: {
    src: string;
    placeholder: PixelsCSS;
  }[];
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
    image: string;
    alt: string;
    source?: string;
    placeholder?: PixelsCSS;
  }[];
  postId: string;
}

const placeholderStyle = {
  filter: 'blur(24px)',
  position: 'absolute' as 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const Post: React.FC<PostProps> = ({
  date,
  category,
  breadcrumbs,
  title,
  subtitle,
  highlightedText,
  image,
  imagePlaceholder,
  imageSource,
  shareUrl,
  contents,
  text,
  textImagesPlaceholders,
  moreSection,
  carData,
  galleryImages,
  postId,
}) => {
  const darkModeContext = React.useContext(DarkModeContext);
  const carNameRef = React.useRef(null);

  React.useEffect(() => {
    if (carNameRef && carNameRef.current) {
      if (carNameRef.current.scrollWidth > carNameRef.current.offsetWidth) {
        textFit(carNameRef.current);
      }
    }
  }, [carNameRef]);

  React.useEffect(() => {
    const socialsWindow = window as any;
    if (document.getElementsByClassName('instagram-media').length) {
      !socialsWindow.instgrm
        ? appendScript({ isAsync: true, isDefer: true, src: '//www.instagram.com/embed.js' })
        : socialsWindow.instgrm.Embeds.process();
    }
    if (document.getElementsByClassName('twitter-tweet').length) {
      !socialsWindow.twttr
        ? appendScript({
            isAsync: true,
            isDefer: true,
            src: 'https://platform.twitter.com/widgets.js',
          })
        : socialsWindow.twttr.widgets.load();
    }
    if (document.getElementsByClassName('fb-post').length) {
      !socialsWindow.FB
        ? appendScript({
            isAsync: true,
            isDefer: true,
            src: 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v9.0',
          })
        : socialsWindow.FB.XFBML.parse();
    }
  }, []);

  const convertImgToNextImages = (parsedHtml: ReactElement[] | ReactElement) => {
    if (Array.isArray(parsedHtml)) {
      const elementToReplace: {
        index: number;
        src: string;
        alt: string;
        placeholder: PixelsCSS;
      }[] = [];
      parsedHtml.forEach((element, index) => {
        if (element.type === 'img') {
          const textImagePlaceholder = textImagesPlaceholders.find(
            (placeholder) => placeholder.src === element.props.src
          );
          elementToReplace.push({
            index,
            src: element.props.src,
            alt: element.props.alt,
            placeholder: textImagePlaceholder?.placeholder,
          });
        } else if (element.props?.children) {
          React.Children.map(element.props.children, (childElement) => {
            if (childElement.type === 'img') {
              parsedHtml[index] = childElement;
              const textImagePlaceholder = textImagesPlaceholders.find(
                (placeholder) => placeholder.src === childElement.props.src
              );
              elementToReplace.push({
                index,
                src: childElement.props.src,
                alt: childElement.props.alt,
                placeholder: textImagePlaceholder?.placeholder,
              });
            }
          });
        }
      });

      elementToReplace.forEach((element) => {
        parsedHtml[element.index] = (
          <TextImageContainer key={element.index}>
            {element.placeholder && (
              <div
                style={{
                  ...placeholderStyle,
                  ...element.placeholder,
                }}
              />
            )}
            <Image
              src={element.src}
              alt={element.alt}
              layout="responsive"
              width={1260}
              height={700}
              objectFit="cover"
            />
          </TextImageContainer>
        );
      });
      return parsedHtml;
    } else if (
      parsedHtml.type === 'img' ||
      parsedHtml.props.children.find((childElement) => childElement.type === 'img')
    ) {
      if (parsedHtml.type === 'img') {
        const textImagePlaceholder = textImagesPlaceholders.find(
          (placeholder) => placeholder.src === parsedHtml.props.src
        );
        return (
          <TextImageContainer>
            {textImagePlaceholder?.placeholder && (
              <div
                style={{
                  ...placeholderStyle,
                  ...textImagePlaceholder.placeholder,
                }}
              />
            )}
            <Image
              src={parsedHtml.props.src}
              alt={parsedHtml.props.alt}
              layout="responsive"
              width={1260}
              height={700}
              objectFit="cover"
            />
          </TextImageContainer>
        );
      } else {
        const childIndex = parsedHtml.props.children.findIndex(
          (childElement) => childElement.type === 'img'
        );
        const textImagePlaceholder = textImagesPlaceholders.find(
          (placeholder) => placeholder.src === parsedHtml.props.children[childIndex].props.src
        );
        return (
          <TextImageContainer>
            {textImagePlaceholder?.placeholder && (
              <div
                style={{
                  ...placeholderStyle,
                  ...textImagePlaceholder.placeholder,
                }}
              />
            )}
            <Image
              src={parsedHtml.props.children[childIndex].props.src}
              alt={parsedHtml.props.children[childIndex].props.alt}
              layout="responsive"
              width={1260}
              height={700}
              objectFit="cover"
            />
          </TextImageContainer>
        );
      }
      return parsedHtml;
    } else {
      return parsedHtml;
    }
  };

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

  const images = galleryImages
    ? galleryImages.map((galleryItem) => ({
        original: galleryItem.image,
        thumbnail: galleryItem.image,
        originalAlt: galleryItem.alt,
        thumbnailAlt: `${galleryItem.alt} (miniatura)`,
        description: galleryItem.source ? `Źródło: ${galleryItem.source}` : undefined,
        placeholder: galleryItem.placeholder ? galleryItem.placeholder : undefined,
      }))
    : [];

  const renderLeftNav = (onClick, disabled) => (
    <GalleryButton type="button" onClick={onClick} left disabled={disabled}>
      <Icon iconName={IconName.ChevronRight} variant="flat" width={64} height={64} />
    </GalleryButton>
  );

  const renderRightNav = (onClick, disabled) => (
    <GalleryButton type="button" onClick={onClick} disabled={disabled}>
      <Icon iconName={IconName.ChevronRight} variant="flat" width={64} height={64} />
    </GalleryButton>
  );

  const renderFullscreenButton = (onClick, isFullscreen) => (
    <GalleryButton type="button" onClick={onClick} bottomRight>
      <Icon
        iconName={isFullscreen ? IconName.Minimize : IconName.Maximize}
        variant="flat"
        width={32}
        height={32}
      />
    </GalleryButton>
  );

  const renderItem = (item) => {
    return (
      <div className="image-gallery-slide" style={{ overflow: 'hidden' }}>
        {item.placeholder && (
          <div
            style={{
              ...placeholderStyle,
              ...item.placeholder,
            }}
          />
        )}
        <Image layout="fill" src={item.original} alt={item.originalAlt} objectFit="cover" />
        {item.description && <span className="image-gallery-description">{item.description}</span>}
      </div>
    );
  };

  const renderThumbInner = (item) => {
    return (
      <div className="image-gallery-thumbnail-inner" style={{ overflow: 'hidden' }}>
        {item.placeholder && (
          <div
            style={{
              ...placeholderStyle,
              ...item.placeholder,
            }}
          />
        )}
        <Image src={item.thumbnail} alt={item.thumbnailAlt} layout="fill" objectFit="cover" />
        {item.thumbnailLabel && (
          <div className="image-gallery-thumbnail-label">{item.thumbnailLabel}</div>
        )}
      </div>
    );
  };

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
            <ImageGalleryContainer key={index}>
              <ImageGallery
                items={images}
                key={parsedHtml[index].key}
                showPlayButton={false}
                renderLeftNav={renderLeftNav}
                renderRightNav={renderRightNav}
                renderFullscreenButton={renderFullscreenButton}
                renderItem={renderItem}
                renderThumbInner={renderThumbInner}
              />
            </ImageGalleryContainer>
          ))
      );
      return parsedHtml;
    } else if (parsedHtml.type === 'div' && parsedHtml.props.id === 'post-gallery') {
      return (
        <ImageGalleryContainer>
          <ImageGallery
            items={images}
            showPlayButton={false}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
            renderFullscreenButton={renderFullscreenButton}
            renderItem={renderItem}
            renderThumbInner={renderThumbInner}
          />
        </ImageGalleryContainer>
      );
    } else {
      return parsedHtml;
    }
  };

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
      return text.replace(mainRegex, 1 ? `<div id="post-gallery"></div>` : '');
    },
  });

  const mdConverter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    customizedHeaderId: true,
    simplifiedAutoLink: true,
    extensions: ['SeeAlso', 'AddGallery'],
  });

  const checkGalleries = (text) => {
    const parsedHtml = convertImgToNextImages(parse(mdConverter.makeHtml(text)));
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
        {category && (
          <IconInfo
            text={category.name}
            iconName={category.icon}
            href={category.href}
            slug={category.slug}
          />
        )}
      </TopInfoContainer>
      <Breadcrumbs items={breadcrumbs} />
      <Heading>{title}</Heading>
      <Subheading>{subtitle}</Subheading>
      <PostImageContainer isCarData={!!carData}>
        {!!carData && (
          <CarDataBox>
            <CarDataName ref={carNameRef}>{carData.name}</CarDataName>
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
        <ImageContainer notFullWidth={!!carData}>
          <div
            style={{
              ...placeholderStyle,
              ...imagePlaceholder,
            }}
          />
          <Image
            src={image}
            alt={title}
            layout="fill"
            sizes="(min-width: 1280px) 1260px, (min-width: 1024px) 820px, 100vw"
            objectFit="cover"
          />
        </ImageContainer>
        <SocialShareSection
          shareUrl={shareUrl}
          quote={title}
          pinterestMediaUrl={`https://carsify.pl${image}`}
          rightSide={!!carData}
          isAbsolute
        />
        {imageSource && <ImageSource>Źródło: {imageSource}</ImageSource>}
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
        <Text>{checkGalleries(text)}</Text>
        <ShareSectionContainer>
          <ShareSectionTextContainer>
            <ShareSectionText>Spodobał Ci się ten tekst?</ShareSectionText>
            <ShareSectionBoldedText>Podziel się z innymi!</ShareSectionBoldedText>
          </ShareSectionTextContainer>
          <SocialShareSection
            shareUrl={shareUrl}
            quote={title}
            pinterestMediaUrl={`https://carsify.pl${image}`}
            horizontal
          />
        </ShareSectionContainer>
        <HyvorTalkComments
          palette={darkModeContext.value ? darkTheme.colors.hyvorTalk : lightTheme.colors.hyvorTalk}
          pageId={postId}
        />
      </TextContainer>
      {moreSection}
    </article>
  );
};

export default Post;
