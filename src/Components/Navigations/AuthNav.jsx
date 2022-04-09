import React from "react";
import { NavLink } from "react-router-dom";
export const AuthNav = () => {
  return (
    <>
      <NavLink
        to="registration"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          padding: 10,
        })}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          padding: 10,
        })}
      >
        Log in
      </NavLink>
    </>
  );
};
