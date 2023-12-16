import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap" rel="stylesheet" />
        {/* Add any other <Link> or <style> tags for external stylesheets */}
      </Head>
      <body>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;