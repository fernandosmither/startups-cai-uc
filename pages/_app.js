import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import Navbar from '../components/Navbar.js'
import '../styles/globals.css'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
return (
   <Layout>
      <Component {...pageProps} />
   </Layout>
);
}

export default MyApp;
