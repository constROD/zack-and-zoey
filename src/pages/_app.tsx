import Head from 'next/head';
import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from 'shared/theme';
import '../../styles/globals.css';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Zack & Zoey Learning Tools</title>

        {/* <!--  Primary --> */}
        <meta name="title" content="Zack & Zoey Learning Tools" />
        <meta name="description" content="Learning tools for children" />
        <meta name="application_name" content="Zack & Zoey Learning Tools" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="Zack & Zoey Learning Tools" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zack & Zoey Learning Tools" />
        <meta property="og:url" content="https://zackandzoey.netlify.app" />
        <meta property="og:image" content="https://constrod.me/banner.png" />
        <meta property="og:description" content="Learning tools for children" />

        {/* <!--  Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Learning tools for children" />

        {/* <!--  For Analytics --> */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@username" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
