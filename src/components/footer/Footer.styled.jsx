import styled from "@emotion/styled";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  .contact-me {
    padding: 10px 15px;
    background: #bfacac;
    border-radius: 5px;
    outline: none;
    border: none;
    color: #3f3939;
    font-family: Megrim;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 5.76px;
    cursor: pointer;
    &:hover {
      transform: translateX(0px);
      animation: float 5s ease-in-out infinite;
      color: #bfacac;
      background: #3f3939;
    }
  }
`;
export default FooterStyled;
