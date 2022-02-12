import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, MainHeader, Header } from "./App.styled";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";

function App() {
  return (
    <Container>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={2000} />
    </Container>
  );
}

export default App;
