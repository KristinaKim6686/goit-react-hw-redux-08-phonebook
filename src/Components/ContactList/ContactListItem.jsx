import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebookActions";
import { ListItem, Info, Button } from "./ContactList.styled";

const PhonebookListItem = ({ name, number, id, onDeleteContact }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Info>{name}:</Info>
      <Info>{number}</Info>
      <Button type="button" id={id} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ListItem>
  );
};
export default PhonebookListItem;
