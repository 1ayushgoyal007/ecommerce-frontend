import "../styles/globals.css"
import Head from 'next/head';
import "../app/global.module.css"
export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <script async >
        {function toggleNav() {
          const nav = document.querySelector('nav');
          nav.style.display = (nav.style.display === 'block' || nav.style.display === '') ? 'none' : 'block';
        }}
      </script>
      <script async src="http://www.googletagmanager.com/gtag/js?id=UA-212824582-1"></script>

      {/* local cdn */}

      <script data-ad-client="pub-4650231834320714" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"  ></script>




      {/* My static styling */}
      <style>{`
         
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
      
          header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
          }
      
          nav {
            background-color: #555;
            overflow: hidden;
            animation: fadein 0.5s;
          }
      
          nav a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
      
          nav a:hover {
            background-color: #ddd;
            color: black;
          }
      
          nav a.active {
            background-color: #4CAF50;
            color: white;
          }
      
          .icon {
            display: none;
          }
      
          @media screen and (max-width: 600px) {
            nav {
              flex-direction: column;
            }
      
            .icon {
              display: block;
              position: fixed;
              top: 0;
              right: 0;
              padding: 14px 16px;
              cursor: pointer;
              color:white;
            }
      
            nav a {
              float: none;
              width: 100%;
              text-align: left;
            }
          }
      
          section {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            padding: 2em;
          }
      
          .product {
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 1em;
            padding: 1em;
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease-in-out; /* Add transition for a smooth effect */
          }
      
          .product:hover {
            transform: scale(1.05); /* Add a slight scale effect on hover */
          }
      
          .product img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 1em;
          }
      
          .product h2 {
            font-size: 1.5em;
            margin-bottom: 0.5em;
          }
      
          .product p {
            color: #555;
          }
      
           button {
            background-color: #4CAF50;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 1em;
            transition: background-color 0.3s ease-in-out; /* Add transition for a smooth effect */
          }
      
          .product button:hover {
            background-color: #45a049; /* Darker green on hover */
          }
      
          footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
            position: fixed;
            bottom: 0;
            width: 100%;
          }
      
          @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
          }

          #product-container {
            max-width: 800px;
            margin: 1rem auto;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            border-radius: 8px;
            padding-bottom: 10rem;
          }
      
          #product-image {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 20px;
          }
      
          #product-name {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 10px;
          }
      
          #product-price {
            font-size: 1.2em;
            color: #4CAF50;
            margin-bottom: 10px;
          }
      
          #product-description {
            font-size: 1em;
            line-height: 1.5;
          }
      
          #add-to-cart-btn {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
          }

          .section {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background: white;
          }
      
          form {
            display: flex;
            flex-direction: column;
            width: -webkit-fill-available;
            padding:1rem;
          }

          .contaiin{
            overflow:auto;
            height:60vh;
          }
      
          .map{
            height:20rem;
            padding:1rem;
            margin-bottom:10rem;
          }
          label {
            font-size: 18px;
            margin-bottom: 8px;
          }
      
          input, textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 16px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
      
          textarea {
            height: 100px;
          }
      
      
        
      
        `}</style>

    </Head>
    <Component {...pageProps} />
  </>)
}