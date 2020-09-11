import styled from 'styled-components';

const MoreSectionTitle = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.moreSection};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: ${(props) => props.theme.spaces.s};
  padding-left: ${(props) => props.theme.spaces.s};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.colors.moreSection};
    height: 100%;
    width: 5px;
  }
`;

export default MoreSectionTitle;
