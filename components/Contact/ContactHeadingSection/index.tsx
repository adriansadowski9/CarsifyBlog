import ContactHeading from './styled/ContactHeading';
import EmailSpan from './styled/EmailSpan';
import SocialWrapper from './styled/SocialWrapper';

import * as React from 'react';

import SocialButton from '@components/SocialShareSection/SocialButton';
import SocialShareContainer from '@components/SocialShareSection/SocialShareContainer';

interface SocialProps {
  contactEmail: string;
  Facebook: React.FC<{ fill?: string; width?: string; height?: string }>;
  Twitter: React.FC<{ fill?: string; width?: string; height?: string }>;
  Instagram: React.FC<{ fill?: string; width?: string; height?: string }>;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

const ContactHeadingSection: React.FC<SocialProps> = ({
  contactEmail,
  Facebook,
  Twitter,
  Instagram,
  facebookUrl,
  twitterUrl,
  instagramUrl,
}) => {
  return (
    <SocialWrapper>
      <SocialShareContainer horizontal="false">
        <SocialButton as="a" href={`https://${facebookUrl}`} target="_blank">
          {Facebook && <Facebook />}
        </SocialButton>
        <SocialButton as="a" href={`https://${twitterUrl}`} target="_blank">
          {Twitter && <Twitter />}
        </SocialButton>
        <SocialButton as="a" href={`https://${instagramUrl}`} target="_blank">
          {Instagram && <Instagram />}
        </SocialButton>
      </SocialShareContainer>
      <ContactHeading>Porozmawiajmy</ContactHeading>
      <EmailSpan>{contactEmail}</EmailSpan>
    </SocialWrapper>
  );
};

export default ContactHeadingSection;
