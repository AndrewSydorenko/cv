import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #bfacac;
  padding: 8px 25px;
  transform: translateX(0px);
  animation: float 20s ease-in-out infinite;
  @keyframes float {
    0% {
      box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateX(1%);
    }
    50% {
      box-shadow: 25px 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateX(-2%);
    }
    100% {
      box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateX(1%);
    }
  }
  .social-list {
    display: flex;
    gap: 5px;
  }
  .header-title {
    color: #3f3939;
    font-family: Megrim;
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 5.76px;
  }
`;
export default HeaderStyled;
