import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./defaultAvatar.png";
import { Button } from "../Contacts/ContactList/ContactList.styled";
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <>
      <img src={avatar} alt="" width="32" style={{ padding: 10 }} />
      <span style={{ padding: 10 }}>Welcome, {name}</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </>
  );
}
