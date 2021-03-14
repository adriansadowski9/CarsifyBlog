import ContactHeading from './styled/ContactHeading';
import Email from './styled/Email';
import SocialWrapper from './styled/SocialWrapper';

import * as React from 'react';

import Icon from '@components/Icon';
import SocialButton from '@components/SocialShareSection/SocialButton';
import SocialShareContainer from '@components/SocialShareSection/SocialShareContainer';
import IconName from '@utils/iconNames';

interface SocialProps {
  contactEmail: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

const ContactHeadingSection: React.FC<SocialProps> = ({
  contactEmail,
  facebookUrl,
  twitterUrl,
  instagramUrl,
}) => {
  const withHttps = (url) => (!/^https?:\/\//i.test(url) ? `https://${url}` : url);
  return (
    <SocialWrapper>
      <SocialShareContainer horizontal="false">
        <SocialButton as="a" href={withHttps(facebookUrl)} target="_blank" aria-label="Facebook">
          <Icon iconName={IconName.Facebook} variant="color" width="24px" height="24px" />
        </SocialButton>
        <SocialButton as="a" href={withHttps(twitterUrl)} target="_blank" aria-label="Twitter">
          <Icon
            iconName={IconName.TwitterFlat}
            variant="flat"
            fill="#00acee"
            width="24px"
            height="24px"
          />
        </SocialButton>
        <SocialButton as="a" href={withHttps(instagramUrl)} target="_blank" aria-label="Instagram">
          <Icon iconName={IconName.Instagram} variant="color" width="24px" height="24px" />
        </SocialButton>
      </SocialShareContainer>
      <ContactHeading>Porozmawiajmy</ContactHeading>
      <Email href={`mailto:${contactEmail}`}>{contactEmail}</Email>
    </SocialWrapper>
  );
};

export default ContactHeadingSection;
