import {
  FrontStyled,
  Title,
  ContentBox,
  LeftSideNav,
  FrontImg,
} from "./FrontEnd.styled";
import { useState } from "react";
import SwitchComponents from "./Swither";
import img from "../../assets/img/119A8388.jpg";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Projects } from "./Projects";
import { Cv } from "./Cv";

const FrontEnd = () => {
  const [activeComponent, setActiveComponent] = useState("about");
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <FrontStyled
      layout
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <Title layout="position">Front End</Title>
      <FrontImg layout="position" src={img} alt="sam" onClick={toggleOpen} />
      {isOpen && (
        <ContentBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <nav>
              <LeftSideNav>
                <li
                  className="nav-list-item"
                  onClick={() => {
                    setActiveComponent("about");
                  }}
                >
                  About
                </li>
                <li
                  className="nav-list-item"
                  onClick={() => {
                    setActiveComponent("contacts");
                  }}
                >
                  Contacts
                </li>
                <li
                  className="nav-list-item"
                  onClick={() => {
                    setActiveComponent("projects");
                  }}
                >
                  Projects
                </li>
                <li
                  className="nav-list-item"
                  onClick={() => {
                    setActiveComponent("cv");
                  }}
                >
                  Cv
                </li>
              </LeftSideNav>
            </nav>
          </div>
          <div>
            <SwitchComponents active={activeComponent}>
              <About name={"about"} />
              <Contacts name={"contacts"} />
              <Projects name={"projects"} />
              <Cv name={"cv"} />
            </SwitchComponents>
          </div>
        </ContentBox>
      )}
    </FrontStyled>
  );
};
export default FrontEnd;
