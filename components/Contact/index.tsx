import Button from './ContactButton';
import ContactHeadingSection from './ContactHeadingSection';
import Input from './Input';
import Select from './Select';
import ButtonsContainer from './styled/ButtonsContainer';
import ContactContainer from './styled/ContactContainer';
import GroupInputs from './styled/GroupInputs';
import InputContainer from './styled/InputsContainer';

import * as React from 'react';
import { ThemeContext } from 'styled-components';

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
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        instagramUrl={instagramUrl}
      />
      <InputContainer>
        <GroupInputs>
          <Input gridColumn="span 12" name="name" label="Imię" />
          <Input gridColumn="span 12" name="email" label="Email" />
          <Select
            label="Kategoria"
            items={items}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <Input gridColumn="span 15" name="topic" label="Temat" />
          <Input gridColumn="span 24" name="message" label="Wiadomość" textarea={true} />
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
      </ButtonsContainer>
    </ContactContainer>
  );
};

export default ContactPage;
