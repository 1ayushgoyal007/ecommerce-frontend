import axios from 'axios';
import express from 'express';
import * as qs from 'querystring'

// pages/api/postData.js

function queryStringToObject(url) {
    const queryString = url.split('?')[1];
    const params = new URLSearchParams(queryString);
    const obj = {};

    params.forEach((value, key) => {
        obj[key] = decodeURIComponent(value);
    });

    return obj;
}

async function handler(req, res) {
    console.log('arr____', queryStringToObject(req.url));
    const response = await axios.post("http://13.57.5.73:5000/create-product", queryStringToObject(req.url));
    res.status(response.status).json(response.data)
    // if (req.method === 'POST') {
    //     try {
    //         // Access the posted data
    //         const { data } = req.body;

    //         // Perform server-side logic with the posted data
    //         console.log('Received data:', data);

    //         // Send a JSON response
    //         res.json({ message: 'Data received on the server!' });
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //         res.status(500).json({ error: 'Internal Server Error' });
    //     }
    // }
}

const app = express();

// Use express middleware to parse the request body as JSON
app.use(express.json());

// Attach the handler to the express app
app.all('*', (req, res) => handler(req, res));

// Export the express app as the default handler for the API route
export default app;
