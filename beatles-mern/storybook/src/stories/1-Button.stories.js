import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: "Front-End Components",
  component: Button,
};

export const NavigationBar = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      The Beatles / John Lennon / Paul McCartney / George Harrison / Ringo Starr
      / NEW(+)
    </span>
  </Button>
);

export const UserLogin = () => (
  <Button onClick={action("clicked")}>
    E-Mail: .... Password: ... (Submit BUTTON)
  </Button>
);

export const CreateUser = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      Name(?)....E-Mail: .... Password: ... Password Confirm..... (Submit
      BUTTON)
    </span>
  </Button>
);

export const AlphabetIndex = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      # A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    </span>
  </Button>
);

export const EditOrDelete = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      EDIT ICON / DELETE ICON{" "}
    </span>
  </Button>
);
