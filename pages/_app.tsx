import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CombineProvider } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CombineProvider>
      <Component {...pageProps} />
    </CombineProvider>
  )
}
export default MyApp
