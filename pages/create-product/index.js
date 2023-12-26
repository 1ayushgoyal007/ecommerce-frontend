import Dropdown from "@/Components/Dropdown";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { Categories } from "@/utils";
import axios from "axios";
import { useState } from "react";

const items = [
    { value: "test", label: "test" }
]

const CreateProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        link: '',
        image_key: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    function objectToQueryString(obj) {
        const queryString = Object.keys(obj)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
            .join('&');

        return queryString;
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        // Add your form submission logic here
        if (formData.name && formData.price && formData.description && formData.link && formData.category && formData.image_key) {
            try {
                const queryString = objectToQueryString({ ...formData });
                const res = await axios.get(`/api?${queryString}`);
                setFormData({
                    name: '',
                    price: '',
                    description: '',
                    link: '',
                    image_key: "",
                    category: ""
                })
                localStorage.clear();
                alert(res.data.message);
            } catch (error) {

            }
        } else {
            alert('fill all required fields')
        }

    };

    return <>
        <NavBar />
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                margin: 'auto',
                paddingTop: "2rem",
                height: '100vh'
            }}
            onSubmit={handleSubmit}
        >
            <label style={{ paddingTop: '1rem', lineHeight: 1.2 }} >
                Name:
                <input
                    style={{ width: '100%', padding: "6px" }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>

            <label style={{ paddingTop: '1rem', lineHeight: 1.2 }} >
                Price:
                <input
                    style={{ width: '100%', padding: "6px" }}
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </label>


            <label style={{ paddingTop: '1rem', lineHeight: 1.2 }} >
                Image Key:
                <input
                    style={{ width: '100%', padding: "6px" }}
                    type="text"
                    name="image_key"
                    value={formData.image_key}
                    onChange={handleChange}
                />
            </label>

            <label style={{ paddingTop: '1rem', lineHeight: 1.2 }} >
                Description:
                <textarea
                    rows={4}
                    style={{ width: "100%" }}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </label>

            <label style={{ paddingTop: '1rem', lineHeight: 1.2 }} >
                Referral Link:
                <input
                    style={{ width: '100%', padding: "6px" }}
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                />
            </label>

            <div style={{ padding: "1rem 0" }}>
                <Dropdown items={Categories} value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
            </div>

            {/* {uploadPercentage}
            <label style={{ paddingTop: '1rem', lineHeight: 1.2 }} >
                Upload File:
                <input
                    style={{ width: '100%', padding: "6px" }} type="file" name="file" onChange={handleFileChange} accept=".jpg,.jpeg,.png" />
            </label> */}



            <button type="submit" o >Submit</button>
        </form>
        <Footer />
    </>
}

export default CreateProduct;