import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.png";
import { Button } from "../ContactList/ContactList.styled";
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <>
      <img src={avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </>
  );
}
