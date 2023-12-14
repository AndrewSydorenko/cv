import React from "react";
import { ContactsList } from "./FrontEnd.styled";

export const Contacts = () => {
  return (
    <div id="contacts">
      <ContactsList>
        <li>+380634347244</li>
        <li>samtaktreba@gmail.com</li>
        <li>
          <a
            className="contacts-link"
            href="https://github.com/AndrewSydorenko"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="contacts-link"
            href="https://www.linkedin.com/in/andrijsydorenko"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ContactsList>
    </div>
  );
};
