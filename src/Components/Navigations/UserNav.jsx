import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";

export const UserNav = () => {
  return (
    <>
      <NavLink
        to="/"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/phonebook"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Phonebook
      </NavLink>

      <UserMenu />
    </>
  );
};
