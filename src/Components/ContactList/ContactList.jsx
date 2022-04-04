import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../redux/phonebook/phonebookSlice";
import { List } from "./ContactList.styled";
import PhonebookListItem from "./ContactListItem";
import { getFilter } from "../../redux/phonebook/phonebookSelector";
import contactsFilter from "../../utils/contactFilter";

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data } = useGetContactsQuery();

  return (
    <List>
      {data &&
        contactsFilter(data, filter).map(({ name, number, id }) => {
          return (
            <PhonebookListItem key={id} name={name} number={number} id={id} />
          );
        })}
    </List>
  );
};
export default ContactList;
