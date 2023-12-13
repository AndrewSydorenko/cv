import { HeaderStyled } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <h1 className="header-title">
        Andrew Sydorenko <span className="nik">(samndorf)</span>
      </h1>
    </HeaderStyled>
  );
};
export default Header;
