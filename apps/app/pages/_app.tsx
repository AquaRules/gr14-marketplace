import { ChakraProvider } from '@chakra-ui/react';
import { MetaMaskProvider } from 'metamask-react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '../components/AuthContext';
import { Layout } from '../components/Layout';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GR14 Marketplace</title>
      </Head>
      <ChakraProvider>
        <MetaMaskProvider>
          <AuthProvider>
            <main className="app">
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </main>
          </AuthProvider>
        </MetaMaskProvider>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
