import Button from './ContactButton';
import ContactHeadingSection from './ContactHeadingSection';
import Input from './Input';
import Select from './Select';
import ButtonsContainer from './styled/ButtonsContainer';
import ContactContainer from './styled/ContactContainer';
import GroupInputs from './styled/GroupInputs';
import InputContainer from './styled/InputsContainer';

import * as React from 'react';
import { useForm } from 'react-hook-form';
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
interface UseFormProps {
  name: string;
  email: string;
  category: string;
  topic: string;
  message: string;
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
  const [state, setState] = React.useState({});
  const { register, handleSubmit, errors } = useForm<UseFormProps>();

  const handleChange = (e: { target: { name: string; value: string } }) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const onSubmit = (data) => console.log(data);
  return (
    <ContactContainer onSubmit={handleSubmit(onSubmit)}>
      <ContactHeadingSection
        contactEmail={contactEmail}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        instagramUrl={instagramUrl}
      />
      <InputContainer>
        <GroupInputs>
          <Input
            gridColumn="span 12"
            name="name"
            label="Imię"
            register={register({ required: 'Proszę podać imię.' })}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Input
            gridColumn="span 12"
            name="email"
            label="Email"
            register={register({
              required: 'Podany adres e-mail jest za krótki.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Podany adres e-mail jest nieprawidłowy.',
              },
            })}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Select
            label="Kategoria"
            items={items}
            name="category"
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            register={register()}
            onChange={handleChange}
          />
          <Input
            gridColumn="span 15"
            name="topic"
            label="Temat"
            register={register({ required: true, minLength: 10 })}
            onChange={handleChange}
          />
          {errors.topic && <p>Wymagana liczba znaków to 10.</p>}
          <Input
            gridColumn="span 24"
            name="message"
            label="Wiadomość"
            textarea={true}
            register={register({ required: true, minLength: 15 })}
            onChange={handleChange}
          />
          {errors.message && <p>Wiadomość jest za krótka.</p>}
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
