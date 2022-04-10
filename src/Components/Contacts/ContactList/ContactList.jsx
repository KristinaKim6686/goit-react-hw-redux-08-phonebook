import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../../redux/phonebook/phonebookSlice";
import "react-loader-spinner/dist/react-loader-spinner.cjs.development";
import { BallTriangle } from "react-loader-spinner";
import { List } from "./ContactList.styled";
import PhonebookListItem from "./ContactListItem";
import { getFilter } from "../../../redux/phonebook/phonebookSelector";
import contactsFilter from "../../../utils/contactFilter";

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data, isFetching } = useGetContactsQuery();
  return (
    <List>
      {isFetching && (
        <BallTriangle
          heigth="100"
          width="100"
          color="white"
          ariaLabel="loading-indicator"
        />
      )}
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
