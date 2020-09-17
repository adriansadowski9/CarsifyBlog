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
  isArticles?: boolean;
}

const SocialShareSection: React.FC<SocialShareSectionProps> = ({
  isAbsolute,
  shareUrl,
  horizontal,
  quote,
  pinterestMediaUrl,
  isArticles,
}) => (
  <SocialShareContainer isAbsolute={isAbsolute} horizontal={horizontal} isArticles={isArticles}>
    <FacebookShareButton title="test" url={shareUrl} quote={quote}>
      <SocialButton>
        <Facebook width="24px" height="19.5px" />
      </SocialButton>
    </FacebookShareButton>
    <TwitterShareButton title="test" url={shareUrl}>
      <SocialButton>
        <Twitter width="24px" height="19.5px" />
      </SocialButton>
    </TwitterShareButton>
    <PinterestShareButton title="test" url={shareUrl} media={pinterestMediaUrl}>
      <SocialButton>
        <Pinterest width="24px" height="19.5px" />
      </SocialButton>
    </PinterestShareButton>
  </SocialShareContainer>
);

export default SocialShareSection;
