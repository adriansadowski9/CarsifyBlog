import ButtonsContainer from './styled/ButtonsContainer';
import ContactContainer from './styled/ContactContainer';
import GroupInputs from './styled/GroupInputs';
import InputComponent from './styled/InputComponent';
import InputLabel from './styled/InputLabel';
import InputContainer from './styled/InputsContainer';
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
    <ContactContainer>
      <InputContainer>
        <GroupInputs>
          <InputLabel htmlFor="name"> Imię</InputLabel>
          <InputComponent sizeW="49%" sizeH="72px" name="name" id="name" />
          <InputLabel htmlFor="email" leftProps="51%">
            Email
          </InputLabel>
          <InputComponent type="email" sizeW="49%" sizeH="72px" name="email" id="email" />
        </GroupInputs>
        <GroupInputs>
          <InputLabel htmlFor="category"> Kategoria</InputLabel>
          <InputComponent sizeW="32.5%" sizeH="72px" name="category" id="category" />
          <InputLabel htmlFor="topic" leftProps="35%">
            Temat
          </InputLabel>
          <InputComponent sizeW="65%" sizeH="72px" name="topic" id="topic" />
        </GroupInputs>
        <GroupInputs>
          <InputLabel htmlFor="message"> Wiadomość</InputLabel>
          <InputComponent as="textarea" sizeW="100%" sizeH="188px" name="message" id="message" />
        </GroupInputs>
      </InputContainer>
      <ButtonsContainer>
        <ContactButton
          type="submit"
          bgColor={themeContext.colors.submitButton}
          sizeW="206px"
          sizeH="60px"
        >
          Wyślij
        </ContactButton>
        <SocialButtonsContainer>
          <ContactButton
            type="button"
            bgColor={themeContext.colors.socialButton}
            sizeW="206px"
            sizeH="60px"
          >
            <Facebook width="24px" height="24px" /> Facebook
          </ContactButton>
          <ContactButton
            type="button"
            bgColor={themeContext.colors.socialButton}
            sizeW="206px"
            sizeH="60px"
          >
            <Twitter width="24px" height="24px" />
            Twitter
          </ContactButton>
          <ContactButton
            type="button"
            bgColor={themeContext.colors.socialButton}
            sizeW="206px"
            sizeH="60px"
          >
            <Instagram width="24px" height="24px" />
            Instagram
          </ContactButton>
        </SocialButtonsContainer>
      </ButtonsContainer>
    </ContactContainer>
  );
};

export default ContactPage;
