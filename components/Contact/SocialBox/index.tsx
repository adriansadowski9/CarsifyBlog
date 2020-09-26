import EmailSpan from './styled/EmailSpan';
import IconsWrapper from './styled/IconsWrapper';
import LetsTalk from './styled/LetsTalk';
import SocialWrapper from './styled/SocialWrapper';

import * as React from 'react';

interface SocialProps {
  contactEmail: string;
  Facebook: React.FC<{ fill?: string; width?: string; height?: string }>;
  Twitter: React.FC<{ fill?: string; width?: string; height?: string }>;
  Instagram: React.FC<{ fill?: string; width?: string; height?: string }>;
}

const SocialBox: React.FC<SocialProps> = ({ contactEmail, Facebook, Twitter, Instagram }) => {
  return (
    <SocialWrapper>
      <IconsWrapper>
        {Facebook && <Facebook width="24px" height="24px" />}
        {Twitter && <Twitter width="24px" height="24px" />}
        {Instagram && <Instagram width="24px" height="24px" />}
      </IconsWrapper>
      <LetsTalk>Porozmawiajmy</LetsTalk>
      <EmailSpan>{contactEmail}</EmailSpan>
    </SocialWrapper>
  );
};

export default SocialBox;
