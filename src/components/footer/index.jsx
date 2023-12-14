import FooterStyled from "./Footer.styled";
import { SocialWrapper } from "../header/Header.styled";
import inst from "../../assets/icons/instagram.svg";
import tel from "../../assets/icons/telegram.svg";
import link from "../../assets/icons/linkedin.svg";
import you from "../../assets/icons/youtube.svg";
import face from "../../assets/icons/facebook.svg";
import git from "../../assets/icons/github.svg";
export const Footer = () => {
  return (
    <FooterStyled>
      <SocialWrapper>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://www.instagram.com/samndorf"
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
              href="https://www.youtube.com/@samndorf"
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
              href="https://www.facebook.com/samndorf"
              aria-label="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={face} alt="instagram" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/andrijsydorenko"
              aria-label="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={link} alt="instagram" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://github.com/AndrewSydorenko"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={git} alt="github" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-link"
              href="https://t.me/Samndorf"
              aria-label="youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={tel} alt="instagram" />
            </a>
          </li>
        </ul>
      </SocialWrapper>
      <h3 className="contact-me">Rivne. Ukraine</h3>
    </FooterStyled>
  );
};
export default Footer;
