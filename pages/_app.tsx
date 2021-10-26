import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Background, CombineProvider, Container, RedirectRouter } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CombineProvider>
      <RedirectRouter>
        <Component {...pageProps} />
      </RedirectRouter>
    </CombineProvider>
  )
}
export default MyApp
