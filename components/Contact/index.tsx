import Button from './ContactButton';
import Input from './Input';
import ButtonsContainer from './styled/ButtonsContainer';
import ContactContainer from './styled/ContactContainer';
import GroupInputs from './styled/GroupInputs';
import InputContainer from './styled/InputsContainer';
import SocialButtonsContainer from './styled/SocialButtonsContainer';

import * as React from 'react';
import { ThemeContext } from 'styled-components';

import Facebook from '@assets/icons/facebook.svg';
import Instagram from '@assets/icons/instagram.svg';
import Twitter from '@assets/icons/twitter.svg';
import { Theme } from '@utils/theme';

interface ContactProps {
  contactEmail: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  width?: string;
  name?: string;
  label?: string;
  type?: string;
  textarea?: boolean;
  backgroundColor?: string;
  Icon?: React.ReactElement;
}
const ContactPage: React.FC<ContactProps> = ({ facebookUrl, twitterUrl, instagramUrl }) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  return (
    <ContactContainer>
      <InputContainer>
        <GroupInputs>
          <Input width="615px" name="name" label="Imię" />
          <Input width="615px" name="email" label="Email" />
        </GroupInputs>
        <GroupInputs>
          <Input width="410px" name="category" label="Kategoria" />
          <Input width="820px" name="topic" label="Temat" />
        </GroupInputs>
        <GroupInputs>
          <Input width="1272px" name="message" label="Wiadomość" textarea={true} />
        </GroupInputs>
      </InputContainer>
      <ButtonsContainer>
        <Button
          width="206px"
          height="60px"
          text="Wyślij"
          type="submit"
          backgroundColor={themeContext.colors.submitButton}
        />
        <SocialButtonsContainer>
          <Button
            width="206px"
            height="60px"
            link={facebookUrl}
            text="Facebook"
            Icon={Facebook}
            type="button"
            backgroundColor={themeContext.colors.socialButton}
          ></Button>
          <Button
            width="206px"
            height="60px"
            link={twitterUrl}
            text="Twitter"
            Icon={Twitter}
            type="button"
            backgroundColor={themeContext.colors.socialButton}
          ></Button>
          <Button
            width="206px"
            height="60px"
            link={instagramUrl}
            text="Instagram"
            Icon={Instagram}
            type="button"
            backgroundColor={themeContext.colors.socialButton}
          ></Button>
        </SocialButtonsContainer>
      </ButtonsContainer>
    </ContactContainer>
  );
};

export default ContactPage;
