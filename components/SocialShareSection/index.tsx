import * as React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon
} from 'react-share';
import SocialShareContainer from 'components/SocialShareSection/SocialShareContainer';

interface SocialShareSectionProps {
  shareUrl: string
  isAbsolute?: boolean
  rightSide?: boolean
  horizontal?: boolean
  quote: string
  pinterestMediaUrl: string
}

const SocialShareSection: React.FC<SocialShareSectionProps> = ({isAbsolute, shareUrl, rightSide, horizontal, quote, pinterestMediaUrl}) => (
  <SocialShareContainer isAbsolute={isAbsolute} rightSide={rightSide} horizontal={horizontal}>
    <FacebookShareButton url={shareUrl} quote={quote}>
      <FacebookIcon size={24} round/>
    </FacebookShareButton>
    <TwitterShareButton url={shareUrl}>
      <TwitterIcon size={24} round/>
    </TwitterShareButton>
    <PinterestShareButton url={shareUrl} media={pinterestMediaUrl}>
      <PinterestIcon size={24} round/>
    </PinterestShareButton>
  </SocialShareContainer>
)

export default SocialShareSection
