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
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
    color: #3f3939;
    font-family: Megrim;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 5.76px;
    transform: translateX(0px);
    animation: float 2s ease-in-out infinite;
    cursor: pointer;
    &:hover {
      color: #bfacac;
      background: #3f3939;
    }
  }
`;
export default FooterStyled;
