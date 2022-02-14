import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../redux/phonebookSlice";
import { List } from "./ContactList.styled";
import PhonebookListItem from "./ContactListItem";
import { getFilter } from "../../redux/phonebookSelector";
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
