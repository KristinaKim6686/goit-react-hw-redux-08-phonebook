import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MainHeader, Header } from "../../App.styled";
import ContactForm from "../../Components/ContactForm";
import ContactList from "../../Components/ContactList";
import Filter from "../../Components/Filter";

const Phonebook = () => {
  return (
    <>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Phonebook;
