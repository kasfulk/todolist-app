import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>Todo List App</title>
      </head>
      <RecoilRoot>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Component {...pageProps} />
        </MantineProvider>
      </RecoilRoot>
    </>
  );
}