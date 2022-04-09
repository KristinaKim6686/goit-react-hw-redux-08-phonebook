import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";

export const UserNav = () => {
  return (
    <>
      <NavLink
        to="/"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          padding: 10,
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/phonebook"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          padding: 10,
        })}
      >
        Phonebook
      </NavLink>

      <UserMenu />
    </>
  );
};
