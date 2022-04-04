import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { Form, Label, Input, Button } from "../ContactForm/ContactForm.styled";

export const SignupForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">
        Email{" "}
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
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
        />
      </Label>

      <Button type="submit">Submit</Button>
    </Form>
  );
};
