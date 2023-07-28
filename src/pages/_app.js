import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps}>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
      
    </SessionProvider>
  );
}