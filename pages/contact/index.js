import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";

const Contact = () => {
    return <div>
        <NavBar />
        <div className="contaiin" >

            <section className="section" >
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>

                <div id="map"></div>
            </section>

            <div className="map" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.170066870114!2d77.29797765!3d28.68837475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb57024bfa75%3A0x77539441b398621e!2sShree%20Shirni%20Enterprises%20LLP!5e0!3m2!1sen!2sin!4v1704041287270!5m2!1sen!2sin" style={{ width: "100%", border: "none", height: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>


        <Footer />
    </div>
}

export default Contact;