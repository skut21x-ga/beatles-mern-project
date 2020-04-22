import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "./Navbar.js";
import AlphabetIndex from "./Alphabet.js";
import EditDelete from "./EditDelete.js";
import NewAccountForm from "./EditDelete.js";
import LoginForm from "./EditDelete.js";

storiesOf("Components", module)
  .add("Navigation Bar", () => <Navbar />)
  .add("Alphabet Index", () => <AlphabetIndex />)
  .add("Edit & Delete Buttons", () => <EditDelete />)
  .add("New Account Form", () => <NewAccountForm />)
  .add("Login Form", () => <LoginForm />);
