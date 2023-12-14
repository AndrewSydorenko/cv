import styled from "@emotion/styled";
import { colors } from "../const";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 25px;
  flex-direction: column;
  .contact-me {
    padding: 10px 15px;
    border-radius: 5px;
    color: ${colors.mainDark};
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 400;
    letter-spacing: 4px;
  }
  .social-list {
    display: flex;
    gap: 10px;
  }
  .social-img {
    display: flex;
    opacity: 0.5;
    &:hover {
      transform: scale(1.2);
      opacity: 0.8;
      animation: float 2s ease-in-out infinite;
    }
  }
`;
export default FooterStyled;
