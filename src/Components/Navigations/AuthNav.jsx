import React from "react";
import { NavLink } from "react-router-dom";
export const AuthNav = () => {
  return (
    <>
      <NavLink
        to="registration"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        activeStyle={{ color: "red" }}
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Log in
      </NavLink>
    </>
  );
};
