import { ListItem, Info, Button } from "./ContactList.styled";

const PhonebookListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ListItem>
      <Info>{name}:</Info>
      <Info>{number}</Info>
      <Button type="button" id={id} onClick={onDeleteContact}>
        Delete
      </Button>
    </ListItem>
  );
};
export default PhonebookListItem;
