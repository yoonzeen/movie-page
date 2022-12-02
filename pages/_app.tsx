import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout';
import '../styles/style.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

