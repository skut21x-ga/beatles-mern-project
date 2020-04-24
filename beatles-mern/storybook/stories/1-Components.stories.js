import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "./Navbar.js";
import AlphabetIndex from "./Alphabet.js";
import EditDelete from "./EditDelete.js";
import Banner from "./Banner.js";
import SignUp from "./SignUpForm.js";


storiesOf("Components", module)
  .add("Navigation Bar", () => <Navbar />)
  .add("Alphabet Index", () => <AlphabetIndex />)
  .add("Edit & Delete Buttons", () => <EditDelete />)
  .add("Website Banner", () => <Banner />)
  .add("Sign-up Form", () => <SignUp />)
