import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { Form, Label, Input, Button } from "./ContactForm.styled.js";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../../redux/phonebook/phonebookSlice";
function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChangeInfo = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value.trim());
        break;

      case "number":
        setNumber(value.trim());
        break;

      default:
        return;
    }
  };
  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const isInContacts = (contact) => {
    const normalizedName = contact.name.toLowerCase();
    const allNames = data.map((el) => el.name.toLowerCase());
    const existingContact = allNames.find((name) => name === normalizedName);
    return existingContact;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (!isInContacts(contact)) {
      addContact(contact);
      toast.success("Number added to rhe contacts");
    } else {
      return toast.error("Sorry, this number is already in your contacts.");
    }
    resetForm();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Name
        <Input
          onChange={handleChangeInfo}
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChangeInfo}
          type="tel"
          name="number"
          value={number}
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
