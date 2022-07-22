import "../styles/globals.css";
//import { useState } from "react";
//import { ThemeProvider, GlobalStyleComponent } from "styled-components";

function MyApp({ Component, pageProps }) {
  //const [theme, setTheme] = useState("light");
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
