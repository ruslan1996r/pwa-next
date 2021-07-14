// Этот файл - "обёртка" над всем приложением. Находится над всеми страницами

import '../styles/globals.css'

// export default function MyApp({ Component, pagerProps }) { // ЭТА ХУЕТА НЕ РАБОТАЕТ В НЕКСТЕ! ПИШИ КАК СНИЗУ!!!
//   return <Component {...pagerProps} />
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
