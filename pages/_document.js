import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.illustrateddailynews.com/API/assets/css/style-default.min.css" />
        <link rel="stylesheet" href="https://www.illustrateddailynews.com/API/assets/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://www.illustrateddailynews.com/API/assets/css/mmenub47b.css" />
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