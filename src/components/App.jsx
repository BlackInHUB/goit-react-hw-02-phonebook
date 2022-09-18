import React, { Component } from "react";
import { Box } from "utils/Box";
import { MainTitle, Title } from './Contacts/Titles.styled';
import ContactForm from "./Contacts/ContactForm/ContactForm";
import { ContactsList } from './Contacts/ContactsList/ContactsList'
import {ContactsFilter} from "./Contacts/ContactsFilter/ContactsFilter";

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

  newContactAdd = (newContact) => {
    const { contacts } = this.state;

    for (let contact of contacts) {
      if (contact.name === newContact.name) {
        return alert(`${newContact.name} is already in contacts.`);
      }
    }

    this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))
  }
  
  deleteContact = (deleteId) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== deleteId)}))
  }

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredNames = () => {
    const { contacts, filter } = this.state;

    const normilizedName = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedName))
  }


  render() {
    const { filter } = this.state;
    const contactsToRender = this.getFilteredNames();

    return (
      <Box width="20%" m="0 auto" mt={[4]} p={[4]} border="1px solid" borderColor="teal" borderRadius={[4]}>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm
          onSubmit={this.newContactAdd}
        />
        <Title>Contacts</Title>
        <ContactsFilter value={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={contactsToRender}
          onDeleteBtnClick={this.deleteContact}
        />
      </Box>
    )
  }
};

export default App;