import { Component } from "react";
import { nanoid } from "nanoid";
import { Container, MainHeader, Header } from "./App.styled";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";

import filterContacts from "./utils/contactFilter";
import backgroundImage from "./img/winter-gc4450ba70_1920.jpg";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contactsInLocal = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsInLocal);
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (contact) => {
    const inputId = nanoid();
    if (this.state.contacts.some((el) => el.name === contact.name)) {
      alert(this.state.name + " is already in contacts");
      return;
    }

    this.setState((prev) => ({
      contacts: [...prev.contacts, { ...contact, id: inputId }],
    }));
  };
  handleDeleteContact = (event) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== event.target.id
      ),
    });
  };
  handleFilterContact = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);
    return (
      <Container
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <MainHeader>Phonebook</MainHeader>
        <ContactForm handleAddContact={this.handleAddContact}></ContactForm>
        <Header>Contacts</Header>
        <Filter
          filterValue={this.state.filter}
          onFilter={this.handleFilterContact}
        />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
