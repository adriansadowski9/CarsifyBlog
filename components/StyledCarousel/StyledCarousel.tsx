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
    padding: 3px;

    margin-right: ${(props) => props.theme.spaces.xxxs};
    background-color: ${(props) => props.theme.colors.carouselDot};
    opacity: 0.35;
  }
  .carousel__dot--selected {
    opacity: 1;
  }
`;

export default StyledCarousel;
