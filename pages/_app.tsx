import React, { ReactElement } from 'react'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />
}
