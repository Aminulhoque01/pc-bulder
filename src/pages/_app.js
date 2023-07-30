import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps}>
      <Provider store={store}>
        <>
          <Navbar />
         { <Component {...pageProps} />}
          <Footer />
        </>
      </Provider>
    </SessionProvider>
  );
}
