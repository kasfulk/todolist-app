import React from 'react'
import { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  )
}
