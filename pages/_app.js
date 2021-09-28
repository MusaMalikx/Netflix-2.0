// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// import { Provider } from 'react-redux'
// import { store } from '../redux/store'
// import '../styles/globals.css'
// //import { Provider as AuthProvider } from "next-auth/client"

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

// export default MyApp

// pages/_app.js
//import { SessionProvider } from "next-auth/react";
import { Provider as AuthProvider } from "next-auth/client"
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthProvider session={session}>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}
