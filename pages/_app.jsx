import MainLayout from '../components/MainLayout/MainLayout'; // !important
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout children={page} />); // !important
  return getLayout(<Component {...pageProps} />); // !important
}

export default MyApp;
