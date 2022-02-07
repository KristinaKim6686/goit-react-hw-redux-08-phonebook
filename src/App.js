import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, MainHeader, Header } from "./App.styled";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import useLocalStorage from "./utils/useLocalStorage";
import filterContacts from "./utils/contactFilter";
import { phonebookSelector } from "./redux/phonebookSelector";
import { deleteContact, filterContactList } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const contactList = useSelector(phonebookSelector);

  // const [contacts, setContacts] = useLocalStorage("contactList", []);
  const [filter, setFilter] = useState("");

  const handleFilterContact = (event) => {
    setFilter(event.target.value);
  };
  const filteredContacts = filterContacts(contactList, filter);
  return (
    <Container>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter filterValue={filter} onFilter={handleFilterContact} />
      <ContactList contacts={filteredContacts} />
    </Container>
  );
}

export default App;
