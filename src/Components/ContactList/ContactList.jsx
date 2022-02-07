import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/store.js";
import { List } from "./ContactList.styled";
import PhonebookListItem from "./ContactListItem";

const ContactList = ({ contacts, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (event) => {
    const numberToDelete = contacts.find((el) => el.id === id);

    dispatch(deleteContact({ numberToDelete: "" }));
    // setContacts(
    //   contactList.filter((contact) => contact.id !== event.target.id)
    // );
    console.log(contacts);
  };
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhonebookListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={handleDeleteContact}
          />
        );
      })}
    </List>
  );
};
export default ContactList;
