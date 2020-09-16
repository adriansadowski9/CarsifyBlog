import ButtonsContainer from './styled/ButtonsContainer';
import SocialButtonsContainer from './styled/SocialButtonsContainer';

import * as React from 'react';
import { ThemeContext } from 'styled-components';

import Facebook from '@assets/icons/facebook.svg';
import Instagram from '@assets/icons/instagram.svg';
import Twitter from '@assets/icons/twitter.svg';
import ContactButton from '@components/Contact/styled/ContactButton';
import { Theme } from '@utils/theme';
const ContactPage: React.FC = () => {
  const themeContext: Theme = React.useContext(ThemeContext);
  return (
    <>
      <div>
        <h3>Kontakt:</h3>
        <ButtonsContainer>
          <ContactButton type="submit" bgColor={themeContext.colors.submitButton}>
            Wyślij
          </ContactButton>
          <SocialButtonsContainer>
            <ContactButton type="button" bgColor={themeContext.colors.socialButton}>
              <Facebook width="24px" height="24px" /> Facebook
            </ContactButton>
            <ContactButton type="button" bgColor={themeContext.colors.socialButton}>
              <Twitter width="24px" height="24px" />
              Twitter
            </ContactButton>
            <ContactButton type="button" bgColor={themeContext.colors.socialButton}>
              <Instagram width="24px" height="24px" />
              Instagram
            </ContactButton>
          </SocialButtonsContainer>
        </ButtonsContainer>
      </div>
    </>
  );
};

export default ContactPage;
