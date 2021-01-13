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
}) => {
  return (
    <SocialShareContainer isAbsolute={isAbsolute} horizontal={horizontal} rightSide={rightSide}>
      <FacebookShareButton url={shareUrl} quote={quote}>
        <Icon iconName={IconName.Facebook} variant="color" width="24px" height="24px" />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={quote}>
        <Icon
          iconName={IconName.TwitterFlat}
          variant="flat"
          fill="#00acee"
          width="24px"
          height="24px"
        />
      </TwitterShareButton>
      <PinterestShareButton url={shareUrl} description={quote} media={pinterestMediaUrl}>
        <Icon iconName={IconName.Pinterest} variant="color" width="24px" height="24px" />
      </PinterestShareButton>
    </SocialShareContainer>
  );
};

export default SocialShareSection;
