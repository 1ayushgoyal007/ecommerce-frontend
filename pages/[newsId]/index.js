import React from 'react';
import Head from 'next/head'
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import axios from 'axios';
import { anchorNavigate } from '@/utils/helpers';

const News = ({ data }) => {


  const handleButtonClick = (link) => {
    anchorNavigate(data.referral, true)
  }

  return (
    <>

      <Head>
        {/* Seo tags */}
        <title>Product</title>

      </Head>
      <NavBar />
      <div id="product-container">
        <img
          id="product-image"
          src={data.src}
          alt="Product"
        />

        <h1 id="product-name">{data.name}</h1>
        <p id="product-price">Rs. {data.price}</p>

        <p id="product-description">
          {data.description}
        </p>

        <button onClick={handleButtonClick} >
          Buy Now
        </button>
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from an API
  const id = context.query.newsId
  const response = await axios.get("http://13.57.5.73:5000/product/" + id);
  const data = await response.data;

  // Pass data as props to the page component
  return {
    props: {
      data,
    },
  };
}



export default News;
