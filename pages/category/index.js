import React from 'react';

import Head from 'next/head';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import { Categories } from '@/utils';
import { anchorNavigate } from '@/utils/helpers';

const Category = () => {

  const handleNavigate = (item) => {
    anchorNavigate(`/category/${item.value}`)
  }

  return (
    <>
      <Head>
        {/* Seo tags */}
        <title>Illustrated Daily News</title>

      </Head>
      <NavBar />
      <section style={{ paddingBottom: 0 }} >
        <h2> Categories </h2>
      </section>

      <section style={{ display: 'flex', flexDirection: "column", paddingTop: 0 }} >
        {Categories.map(item => {
          return <div>
            <div class="product" key={item} style={{ width: "15rem" }} onClick={() => handleNavigate(item)} >
              <h2>{item.label}</h2>
            </div>
          </div>
        })}
      </section>

      <Footer />
    </>
  )
}



export default Category;
