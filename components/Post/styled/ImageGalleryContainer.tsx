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

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    border: 3px solid ${(props) => props.theme.colors.galleryThumbnailsBorder};
  }
`;

export default ImageGalleryContainer;
