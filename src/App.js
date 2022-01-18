import { useState, useEffect } from "react";

import { Container, MainHeader, Header } from "./App.styled";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import useLocalStorage from "./utils/useLocalStorage";
import filterContacts from "./utils/contactFilter";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const handleAddContact = (contact) => {
    if (contacts.some((el) => el.name === contact.name)) {
      alert(contact.name + " is already in contacts");
      return;
    }
    setContacts((prevState) => [...prevState, contact]);
  };

  const handleDeleteContact = (event) => {
    setContacts(contacts.filter((contact) => contact.id !== event.target.id));
  };
  const handleFilterContact = (event) => {
    setFilter(event.target.value);
  };
  const filteredContacts = filterContacts(contacts, filter);
  return (
    <Container>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm addContact={handleAddContact}></ContactForm>
      <Header>Contacts</Header>
      <Filter filterValue={filter} onFilter={handleFilterContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
}

export default App;
