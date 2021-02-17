// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { ThemeProvider } from "styled-components";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";
// Data
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const products = useSelector((state) => state.productReducer.products);

  console.log(products);
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Helmet>
            <title>Home</title>
            <meta name="description" content="Home page" />
          </Helmet>
          <Home />
        </Route>
        <Route
          path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}
        >
          <ProductForm />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Helmet>
            <title>Products</title>
            <meta name="description" content="Our list of products" />
          </Helmet>
          <ProductList products={products} />
        </Route>
        <Route path="/shops/:shopSlug">
          <ShopDetail />
        </Route>
        <Route path="/shops">
          <ShopList />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
