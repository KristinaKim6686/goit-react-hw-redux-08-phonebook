import { List } from "./ContactList.styled";
import PhonebookListItem from "./ContactListItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhonebookListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};
export default ContactList;
