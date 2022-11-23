import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Head>
          <title>Todo List App</title>
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  )
}
