import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Manrope, Signika, Signika_Negative } from "next/font/google";

import "~/styles/globals.css";

const manrope = Manrope({ subsets: ['latin'] })
const signika = Signika({ subsets: ['latin'] })
const signikaNegative = Signika_Negative({ subsets: ['latin'] })

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode,
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <>
      <style jsx global>
        {`
          :root {
            --font-manrope: ${ manrope.style.fontFamily };
            --font-signika: ${ signika.style.fontFamily };
            --font-signika-negative: ${ signikaNegative.style.fontFamily };
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
