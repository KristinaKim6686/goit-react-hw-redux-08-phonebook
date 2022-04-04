import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heading, Nav, Container } from "./Layout.styled";
import { AuthNav } from "../Navigations/AuthNav";
import { UserNav } from "../Navigations/UserNav";
import { authSelectors } from "../../redux/auth";

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Heading>
        <Nav>{isLoggedIn ? <UserNav /> : <AuthNav />}</Nav>
      </Heading>
      <Outlet />
    </Container>
  );
};
