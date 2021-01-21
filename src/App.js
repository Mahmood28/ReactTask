import { ThemeProvider } from "styled-components";
import StoreHome from "./components/Home";
import BookList from "./components/BookList";
import { GlobalStyle } from "./styles";
const theme = {
  mainColor: "#000000",
  backgroundColor: "#838B8B",
  blue: "#009ACD",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoreHome />
      <BookList />
    </ThemeProvider>
  );
}

export default App;
