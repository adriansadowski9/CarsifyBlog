import styled from 'styled-components';

const GalleryButton = styled.button<{ left: boolean; disabled: boolean; bottomRight: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  cursor: pointer;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &:active {
    svg {
      fill: ${(props) => props.theme.colors.galleryNavButtonHover};
    }
  }

  ${(props) =>
    props.left
      ? `
        left: 0;
        transform: translateY(-50%) rotate(180deg);
        
      `
      : 'right: 0;'}

  ${(props) =>
    props.bottomRight
      ? `
      right: ${props.theme.spaces.xs};
      top: unset;
      bottom: ${props.theme.spaces.xs};
      transform: none;
    `
      : ''}

    svg {
    fill: ${(props) =>
      props.disabled
        ? props.theme.colors.galleryDisabledNavButton
        : props.theme.colors.galleryNavButton};
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.4));
  }

  &:hover {
    svg {
      fill: ${(props) =>
        props.disabled
          ? props.theme.colors.galleryDisabledNavButton
          : props.theme.colors.galleryNavButtonHover};
    }
  }
`;

export default GalleryButton;
