import React from 'react';

import Head from 'next/head';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';

const Category = ({ metaData }) => {

  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home Decor',
    'Sports & Outdoors',
    'Beauty',
    'Toys & Games',
    'Automotive',
  ];

  return (
    <>
      <Head>
        {/* Seo tags */}
        <title>Illustrated Daily News</title>

      </Head>
      <NavBar />
      <section style={{ paddingBottom: 0 }} >
        <h2 >
          Categories

        </h2>
      </section>

      <section style={{ display: 'flex', flexDirection: "column", paddingTop: 0 }} >
        {categories.map(item => {
          return <div>
            <div class="product" key={item} style={{ width: "15rem" }} >
              <h2>{item}</h2>
            </div>
          </div>
        })}
      </section>

      <Footer />
    </>
  )
}



export default Category;
