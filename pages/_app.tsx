import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/GlobalStyles.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Responsiv nav with unit test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};
export default App;
