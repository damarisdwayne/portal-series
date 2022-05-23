import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { LayoutProvider } from '../Provider/LayoutProvider'
import store from '../store'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
