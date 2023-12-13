import Acting from "../acting";
import FrontEnd from "../frontEnd";
import MainStyled from "./Main.styled";

const Main = () => {
  return (
    <MainStyled layout>
      <FrontEnd />
      <Acting />
    </MainStyled>
  );
};
export default Main;
