import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
import { MainHeader } from "../App.styled";
import Hello from "./UserView/Hello.jpg";

export default function UserView() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const hello = Hello;

  return (
    <>
      <img src={hello} alt="" width="240" />
      <MainHeader>Welcome, {name}</MainHeader>
    </>
  );
}
