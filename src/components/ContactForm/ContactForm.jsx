import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Input, InputContainer, ButtonSubmit, Form } from './ContactForm.styled';

function ContactForm ({ onSubmit }) {
	const [name, setName] = useState('');
  const [number, setNumber] = useState('');

	const handleInputChange = evt => {
		if (evt.target.name === 'name') {
			 setName(evt.target.value);
		  } 
		  if (evt.target.name === 'number') {
			setNumber(evt.target.value);
		  }
	};

	const handleSubmit = event => {
		event.preventDefault();

		const newContact = {
			id: nanoid(),
			name,
			number,
		  };
		  onSubmit(newContact);
		  reset();
	};

const reset = () => {
	setName('');
	setNumber('');
}
		return (
			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<label>
						<Input
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							value={name}
							onChange={handleInputChange}
							required
						/>
						Name
					</label>

					<label>
						<Input
							type="tel"
							name="number"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
							value={number}
							onChange={handleInputChange}
							required
						/>
						Phone number
					</label>
				</InputContainer>

				<ButtonSubmit type="submit">ADD CONTACT</ButtonSubmit>
			</Form>
		);
	}

	ContactForm.propTypes = {
		onSubmit: PropTypes.func,
	  };

export default ContactForm;