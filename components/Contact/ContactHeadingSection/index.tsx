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
  return (
    <SocialWrapper>
      <SocialShareContainer horizontal="false">
        <SocialButton
          as="a"
          href={`https://${facebookUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName={IconName.Facebook} variant="color" width="24px" height="24px" />
        </SocialButton>
        <SocialButton
          as="a"
          href={`https://${twitterUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName={IconName.Twitter} variant="color" width="24px" height="24px" />
        </SocialButton>
        <SocialButton
          as="a"
          href={`https://${instagramUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName={IconName.Instagram} variant="color" width="24px" height="24px" />
        </SocialButton>
      </SocialShareContainer>
      <ContactHeading>Porozmawiajmy</ContactHeading>
      <Email href={`mailto:${contactEmail}`}>{contactEmail}</Email>
    </SocialWrapper>
  );
};

export default ContactHeadingSection;
