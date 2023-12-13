import React from 'react';
import Head from 'next/head';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';


const HomePage = (data) => {

    const records = data.data?.records || [];
    const router = useRouter();

    const handleView = (id) => {
        console.log('id', id);
        router.push('/wer');
    }

    return (
        <>
            <Head>
                {/* Seo tags */}
                <title>Home</title>
            </Head>

            <NavBar />
            {/* <div class="icon" onclick="toggleNav()">
                &#9776;
            </div> */}

            <section>
                <h1>Latest Products</h1>

            </section>

            <section style={{ paddingBottom: '8rem' }} >

                {records.map((item) => {
                    return <div class="product" key={item._id} style={{ width: '340px', height: "510px", overflow: 'auto', display: 'flex', flexDirection: "column", justifyContent: "space-between" }}>
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

export async function getServerSideProps() {
    // Fetch data from an API
    const response = await axios.get("http://13.57.5.73:5000/product-list")
    const data = await response.data;

    // Pass data as props to the page component
    return {
        props: {
            data,
        },
    };
}



export default HomePage;
