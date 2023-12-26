import React from 'react';
import Footer from '@/Components/Footer';
import Head from 'next/head';
import NavBar from '../../../Components/NavBar';
import axios from 'axios';

const Category = (data) => {


  const records = data.data?.records || [];

  const handleView = (id) => {
    anchorNavigate(`/${id}`)
  }

  return (
    <>
      <Head>
        {/* Seo tags */}
        <title>Illustrated Daily News</title>

      </Head>
      <NavBar />

      <section style={{ paddingBottom: 0 }} >
        <h1>Category Products</h1>

      </section>

      <section style={{ paddingBottom: '8rem' }} >

        {records.map((item) => {
          return <div class="product" key={item._id} style={{ width: '340px', height: "490px", overflow: 'auto', display: 'flex', flexDirection: "column", justifyContent: "space-between" }}>
            <img src={item.image_src} alt="Product 1" style={{ width: "320px", height: "240px", objectFit: 'contain' }} />
            <h2>{item.name}</h2>
            <p>{item.description.slice(0, 100)}</p>
            <button onClick={() => handleView(item?._id)} >View</button>
          </div>
        })}


      </section>

      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from an API
  const response = await axios.get("http://13.57.5.73:5000/product-list?category=" + context.params.id)
  const data = await response.data;

  // Pass data as props to the page component
  return {
    props: {
      data,
    },
  };
}

export default Category;
