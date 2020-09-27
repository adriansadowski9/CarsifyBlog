import SocialButton from './SocialButton';

import * as React from 'react';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';

import Facebook from '@assets/icons/facebook.svg';
import Pinterest from '@assets/icons/pinterest.svg';
import Twitter from '@assets/icons/twitter.svg';
import SocialShareContainer from '@components/SocialShareSection/SocialShareContainer';

interface SocialShareSectionProps {
  shareUrl: string;
  isAbsolute?: boolean;
  horizontal?: boolean;
  quote: string;
  pinterestMediaUrl: string;
  rightSide?: boolean;
}

const SocialShareSection: React.FC<SocialShareSectionProps> = ({
  isAbsolute,
  shareUrl,
  horizontal,
  quote,
  pinterestMediaUrl,
  rightSide,
}) => (
  <SocialShareContainer isAbsolute={isAbsolute} horizontal={horizontal} rightSide={rightSide}>
    <FacebookShareButton title="test" url={shareUrl} quote={quote}>
      <SocialButton>
        <Facebook width="24px" height="24px" />
      </SocialButton>
    </FacebookShareButton>
    <TwitterShareButton title="test" url={shareUrl}>
      <SocialButton>
        <Twitter width="24px" height="24px" />
      </SocialButton>
    </TwitterShareButton>
    <PinterestShareButton title="test" url={shareUrl} media={pinterestMediaUrl}>
      <SocialButton>
        <Pinterest width="24px" height="24px" />
      </SocialButton>
    </PinterestShareButton>
  </SocialShareContainer>
);

export default SocialShareSection;
