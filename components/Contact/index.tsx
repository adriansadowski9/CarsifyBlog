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
import axios from 'axios';
import { useRouter } from 'next/router';
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
  contactCategories: string[];
}
interface UseFormProps {
  name: string;
  email: string;
  category: string;
  topic: string;
  message: string;
}

const ContactPage: React.FC<ContactProps> = ({
  facebookUrl,
  twitterUrl,
  instagramUrl,
  contactEmail,
  contactCategories,
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  const [selectedItem, setSelectedItem] = React.useState(contactCategories[0]);
  const [state, setState] = React.useState({});
  const { register, handleSubmit, errors } = useForm<UseFormProps>();
  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axios({
      url: 'https://formspree.io/f/mqkgjnwa',
      method: 'post',
      headers: { Accept: 'application/json' },
      data: {
        name: state['name'],
        email: state['email'],
        category: state['category'],
        topic: state['topic'],
        message: state['message'],
      },
    })
      .then(() => {
        router.push(
          {
            pathname: '/',
            query: {
              alertType: 'success',
              alertHeading: 'Dziękujemy za wysłanie wiadomości!',
              alertMessage: 'Postaramy się odpowiedzieć jak najszybciej',
            },
          },
          '/'
        );
      })
      .catch((error) =>
        router.push(
          {
            pathname: '/kontakt',
            query: {
              alertType: 'error',
              alertHeading: 'Wystąpił błąd!',
              alertMessage: error.message,
            },
          },
          '/kontakt'
        )
      );
  };

  return (
    <ContactContainer onSubmit={handleSubmit(onSubmit)} method="POST">
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
            register={register({ required: true, minLength: 3 })}
            onChange={handleChange}
            error={errors.name ? 'jest za krótkie (min. 3 znaki)' : ''}
            type="text"
          />

          <Input
            gridColumn="span 12"
            name="email"
            label="Email"
            register={register({
              required: 'jest nieprawidłowy',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'jest nieprawidłowy',
              },
            })}
            error={errors.email ? errors.email.message : ''}
            onChange={handleChange}
            type="text"
          />
          <Select
            label="Kategoria"
            contactCategories={contactCategories}
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
            register={register({ required: true, minLength: 3 })}
            onChange={handleChange}
            error={errors.topic ? 'jest za krótki (min. 3 znaki)' : ''}
            type="text"
          />

          <Input
            gridColumn="span 24"
            name="message"
            label="Wiadomość"
            textarea={true}
            register={register({ required: true, minLength: 10 })}
            onChange={handleChange}
            error={errors.message ? 'jest za krótka (min. 10 znaków)' : ''}
          />
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
