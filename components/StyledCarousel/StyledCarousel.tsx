import { CarouselProvider } from 'pure-react-carousel';
import styled from 'styled-components';
const StyledCarousel = styled(CarouselProvider)`
  position: relative;
  .dots {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 10px;
  }
  .carousel__dot {
    border: none;
    border-radius: 50%;
    height: 12px;
    width: 6px !important;
    margin-right: 5px;
    background-color: #fff;
    opacity: 0.35;
  }
  .carousel__dot--selected {
    opacity: 1;
  }
`;

export default StyledCarousel;
