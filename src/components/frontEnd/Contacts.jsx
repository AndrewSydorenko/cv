import React from "react";
import { ContactsList } from "./FrontEnd.styled";

export const Contacts = () => {
  return (
    <div id="contacts">
      <ContactsList>
        <li>
          <p>+380634347244</p>
        </li>
        <li>
          <p>samtaktreba@gmail.com</p>
        </li>
        <li>
          <p>WatsApp</p>
        </li>
        <li>
          <p>GitHub</p>
        </li>
        <li>
          <p>Linkedin</p>
        </li>
        <li>
          <p>Rivne, Ukraine</p>
        </li>
      </ContactsList>
    </div>
  );
};
