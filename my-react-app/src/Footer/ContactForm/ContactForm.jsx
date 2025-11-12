import { useState } from 'react';
import "./ContactForm.css"
import LongButton from "/src/Components/LongButton/LongButton.jsx";

export default function ContactForm() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "14cb941a-5ad9-4ed2-b1e1-2c4c59fe1b42");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <section className="ContactForm">
            <form onSubmit={onSubmit} className="footer-form">
                <div className="input-box">
                    <label className="body-medium">Name</label >
                    <input type="text" name="name" className="field" placeholder="Palkin Oleg" required/>
                </div>
                <div className="input-box">
                    <label className="body-medium">Email</label>
                    <input type="text" name="email" className="field" required/>
                </div>
                <div className="input-box">
                    <label className="body-medium">Subject</label>
                    <input type="text" className="field" required/>
                </div>
                <div className="input-box">
                    <label className="body-medium">Message</label>
                    <textarea name="message" className="field field-large" required/>
                </div>
                <div className="footer-submit-container">
                    <LongButton type="submit" label="SUBMIT"/>
                </div>
                <p>{result}</p>
            </form>
        </section>
    )
}