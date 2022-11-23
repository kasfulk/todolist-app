import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Head>
            <title>Todo List App</title>
          </Head>
          <Component {...pageProps} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  )
}
