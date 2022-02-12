import { useSelector } from "react-redux";
import { deleteContact } from "../../redux/phonebookActions";
import { List } from "./ContactList.styled";
import PhonebookListItem from "./ContactListItem";
import { getContacts, getFilter } from "../../redux/phonebookSelector";
import contactsFilter from "../../utils/contactFilter";
const ContactList = () => {
  const fullContactList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contacts = contactsFilter(fullContactList, filter);

  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhonebookListItem key={id} name={name} number={number} id={id} />
        );
      })}
    </List>
  );
};
export default ContactList;
