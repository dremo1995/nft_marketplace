import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen flex-col">
      <Navbar />
      <div className="pt-32">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/6bc4cce561.js" crossOrigin="anonymous" />
  </ThemeProvider>

);

export default MyApp;
