import HeaderStyled from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <p>home</p>
      <h1 className="header-title">Andrew Sydorenko</h1>
      <div className="social-wrapper">
        <ul className="social-list">
          <li className="social-list__item">inst</li>
          <li className="social-list__item">tel</li>
          <li className="social-list__item">link</li>
          <li className="social-list__item">you</li>
        </ul>
      </div>
    </HeaderStyled>
  );
};
export default Header;
