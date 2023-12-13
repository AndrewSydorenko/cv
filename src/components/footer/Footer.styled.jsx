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
    background: ${colors.mainLight};
    border-radius: 5px;
    outline: none;
    border: none;
    color: ${colors.mainDark};
    font-family: Megrim;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 5.76px;
    &:hover {
      transform: translateX(0px);
      animation: float 5s ease-in-out infinite;
      color: ${colors.mainLight};
      background: ${colors.mainDark};
    }
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
    }
  }
`;
export default FooterStyled;
