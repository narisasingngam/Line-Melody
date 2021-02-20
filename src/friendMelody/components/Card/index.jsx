import styled from "styled-components";

const Card = styled.div`
  width: fit-content;
  padding: 24px;
  margin: 20px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 600px)  {
    width: 100px;
  }
`;

export default Card;