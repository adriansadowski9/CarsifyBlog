import Carousel from 'nuka-carousel';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 250px !important;
  &.slider {
    .slider-control-centerleft,
    .slider-control-centerright {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
    .paging-dot {
      opacity: 0.35;
      fill: #fff;
    }
  }
`;
export default StyledCarousel;
