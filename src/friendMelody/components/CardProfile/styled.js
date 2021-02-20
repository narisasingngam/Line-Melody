import styled from "styled-components";

export const Picture = styled.img`
    width: 150px;
    display: flex;
    justify-content: center;
    border-radius: 8px;

    @media only screen and (max-width: 600px)  {
        width: 50px;
  }
`