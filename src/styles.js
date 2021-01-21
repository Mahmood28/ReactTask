import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }

`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  width: 100%;
`;

export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    height: 300px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
