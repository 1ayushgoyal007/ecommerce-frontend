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
        image: null,
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // The result property contains the base64-encoded string
                const base64 = reader.result.split(',')[1];
                setFormData((prevData) => ({ ...prevData, image: base64 }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form Data:', formData);
        const payload = formData;
        try {
            const res = await axios.post("http://13.57.5.73:5000/create-product", payload);
            alert(res.data.message);
            setFormData({})
        } catch (error) {

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

            <div style={{ paddingTop: "1rem" }}>
                <Dropdown items={Categories} value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
            </div>

            <label style={{ paddingTop: '1rem', lineHeight: 1.2 }} >
                Upload File:
                <input
                    style={{ width: '100%', padding: "6px" }} type="file" name="file" onChange={handleFileChange} accept=".jpg,.jpeg,.png" />
            </label>

            <button type="submit" o >Submit</button>
        </form>
        <Footer />
    </>
}

export default CreateProduct;