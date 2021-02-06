import styled from 'styled-components';

const ImageGalleryContainer = styled.div`
  .image-gallery-slide img {
    height: 350px;
    object-fit: cover;
  }

  @media only screen and (min-width: 768px) {
    .image-gallery-slide img {
      height: 450px;
    }
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    .image-gallery-slide img {
      height: 600px;
    }
  }

  .image-gallery-content.fullscreen .image-gallery-slide img {
    height: auto;
  }

  .image-gallery-thumbnails-container {
    cursor: initial;
  }

  .image-gallery-thumbnail {
    cursor: pointer;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    border: 3px solid ${(props) => props.theme.colors.galleryThumbnailsBorder};
  }

  .image-gallery-description {
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.imageSourceText};
    background: ${(props) => props.theme.colors.imageSourceBg};
    padding: ${(props) => props.theme.spaces.xxxs} ${(props) => props.theme.spaces.xxs};
    bottom: 0;
  }
`;

export default ImageGalleryContainer;
