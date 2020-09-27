import Button from './ContactButton';
import ContactHeadingSection from './ContactHeadingSection';
import Input from './Input';
import Select from './Select';
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
  width?: string;
  name?: string;
  label?: string;
  type?: string;
  textarea?: boolean;
  backgroundColor?: string;
  Icon?: React.ReactElement;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  contactEmail: string;
}
const items = [
  { id: 1, value: 'Samochody' },
  { id: 2, value: 'Ogłoszenia' },
  { id: 3, value: 'Porady' },
];
const ContactPage: React.FC<ContactProps> = ({
  facebookUrl,
  twitterUrl,
  instagramUrl,
  contactEmail,
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  const [selectedItem, setSelectedItem] = React.useState(items[0].value);
  return (
    <ContactContainer>
      <ContactHeadingSection
        contactEmail={contactEmail}
        Facebook={Facebook}
        Twitter={Twitter}
        Instagram={Instagram}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        instagramUrl={instagramUrl}
      />
      <InputContainer>
        <GroupInputs>
          <Input width="615px" name="name" label="Imię" />
          <Input width="615px" name="email" label="Email" />
        </GroupInputs>
        <GroupInputs>
          <Select
            width="410px"
            label="Kategoria"
            items={items}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
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
