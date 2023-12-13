import React from 'react';
import Footer from '@/Components/Footer';
import Head from 'next/head';
import NavBar from '../../../Components/NavBar';

const Category = ({ metaData }) => {

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

      <section>

        <div class="product">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 1" />
          <h2>Stylish Headphones</h2>
          <p>Immersive sound quality for music lovers.</p>
          <button>Add to Cart</button>
        </div>

        <div class="product">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 2" />
          <h2>Fashionable Backpack</h2>
          <p>Stay organized with this trendy and spacious backpack.</p>
          <button>Add to Cart</button>
        </div>

        <div class="product">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 3" />
          <h2>Sleek Smartwatch</h2>
          <p>Track your fitness and stay connected with this stylish smartwatch.</p>
          <button>Add to Cart</button>
        </div>
      </section>

      <Footer />
    </>
  )
}



export default Category;
