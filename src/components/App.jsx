import { useState, useEffect } from 'react';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { AppContainer, Container, TitleMain, Title } from './App.styled';
const contactList = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export function App () {
	const [contacts, setContacts] = useState(
		() => JSON.parse(window.localStorage.getItem('contacts')) ?? contactList
	  );

	  const [filter, setFilter] = useState('');

	  useEffect(() => {
		window.localStorage.setItem('contacts', JSON.stringify(contacts));
	  }, [contacts]);
	
	  const addContact = data => {
		const contactNames = contacts.map(contact => contact.name);
	
		if (contactNames.includes(data.name)) {
		  alert(`${data.name} is already in contacts.`);
		} else {
		  setContacts(state => [...state, data]);
		}
	  };

	const deleteContact = contactId => {
		setContacts(state => state.filter(contact => contact.id !== contactId));
	  };

	  const changeFilter = evt => setFilter(evt.target.value);

	  const filterContact = () => {
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter(contact =>
		  contact.name.toLowerCase().includes(normalizedFilter)
		);
	  };
	
	  const visibleContacts = filterContact();	


		return (
			<AppContainer>
				<Container>
					<TitleMain>Phonebook</TitleMain>
					<ContactForm onSubmit={addContact} />
				</Container>
				<Container>
					<Title>Contacts</Title>
					<Filter filter={filter} onChange={changeFilter} />
					<ContactList
						contacts={visibleContacts}
						onDeleteContact={deleteContact}
					/>
				</Container>
			</AppContainer>
		);
	}
