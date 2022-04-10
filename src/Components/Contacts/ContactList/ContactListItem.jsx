import { useDeleteContactMutation } from "../../../redux/phonebook/phonebookSlice";
import { ListItem, Info, Button } from "./ContactList.styled";

const PhonebookListItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ListItem>
      <Info>{name}:</Info>
      <Info>{number}</Info>
      <Button type="button" id={id} onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </ListItem>
  );
};
export default PhonebookListItem;
