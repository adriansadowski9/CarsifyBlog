import SocialButton from './SocialButton';

import * as React from 'react';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';

import Icon from '@components/Icon';
import SocialShareContainer from '@components/SocialShareSection/SocialShareContainer';
import IconName from '@utils/iconNames';

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
        <Icon iconName={IconName.Facebook} variant="color" width="24px" height="24px" />
      </SocialButton>
    </FacebookShareButton>
    <TwitterShareButton title="test" url={shareUrl}>
      <SocialButton>
        <Icon iconName={IconName.Twitter} variant="color" width="24px" height="24px" />
      </SocialButton>
    </TwitterShareButton>
    <PinterestShareButton title="test" url={shareUrl} media={pinterestMediaUrl}>
      <SocialButton>
        <Icon iconName={IconName.Pinterest} variant="color" width="24px" height="24px" />
      </SocialButton>
    </PinterestShareButton>
  </SocialShareContainer>
);

export default SocialShareSection;
