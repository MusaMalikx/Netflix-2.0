// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import { Provider } from 'react-redux'
import { store } from '../redux/store'
import '../styles/globals.css'
//import { Provider as AuthProvider } from "next-auth/client"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
