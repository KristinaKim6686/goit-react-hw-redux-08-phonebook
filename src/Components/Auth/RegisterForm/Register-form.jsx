import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../../redux/auth";
import {
  Form,
  Label,
  Input,
  Button,
} from "../../Contacts/ContactForm/ContactForm.styled";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    console.log("ups");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={name}
          autoComplete="off"
        />
      </Label>

      <Label htmlFor="email">
        Email
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          autoComplete="off"
        />
      </Label>

      <Label htmlFor="password">
        Password
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          autoComplete="off"
        />
      </Label>

      <Button type="submit">Submit</Button>
    </Form>
  );
};
