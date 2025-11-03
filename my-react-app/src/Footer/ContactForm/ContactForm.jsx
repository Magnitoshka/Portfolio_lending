import "./ContactForm.css"
import LongButton from "/src/Components/LongButton/LongButton.jsx";

export default function ContactForm() {
    return (
        <section className="ContactForm">
            <form className="footer-form">
                <div className="input-box">
                    <label className="body-medium">Name</label>
                    <input type="text" className="field" placeholder="Palkin Oleg" required/>
                </div>
                <div className="input-box">
                    <label className="body-medium">Email</label>
                    <input type="text" className="field" required/>
                </div>
                <div className="input-box">
                    <label className="body-medium">Subject</label>
                    <input type="text" className="field" required/>
                </div>
                <div className="input-box">
                    <label className="body-medium">Message</label>
                    <input type="text" className="field field-large" required/>
                </div>
                <div className="footer-submit-container">
                    <LongButton type="submit" label="SUBMIT"/>
                </div>
            </form>
        </section>
    )
}