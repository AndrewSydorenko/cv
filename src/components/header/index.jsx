import HeaderStyled from "./Header.styled";
import inst from "../../assets/icons/instagram.svg";
import tel from "../../assets/icons/telegram.svg";
import link from "../../assets/icons/linkedin.svg";
import you from "../../assets/icons/youtube.svg";
import face from "../../assets/icons/facebook.svg";
import home from "../../assets/icons/home.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <a href="/">
        <img className="home-btn" src={home} alt="home" />
      </a>
      <h1 className="header-title">Andrew Sydorenko</h1>
      <div className="social-wrapper">
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://www.instagram.com/semendorf"
              aria-label="Instgram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={inst} alt="instagram" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://www.youtube.com/@semendorf"
              aria-label="telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={you} alt="youtube" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-link"
              href="facebook.com/semendorf"
              aria-label="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={face} alt="instagram" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://t.me/Semendorf"
              aria-label="youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={tel} alt="instagram" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/andrijsydorenko"
              aria-label="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={link} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </HeaderStyled>
  );
};
export default Header;
