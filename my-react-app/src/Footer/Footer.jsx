import "./Footer.css"
import ContactForm from "./ContactForm/ContactForm";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-nav-container">
                    <h1 className="footer-label">LET'S CONNECT</h1>
                    <h3 className="footer-sayHello">Say hello at <span className="underscore-p">
                        magnitoshka11@gmail.com
                    </span></h3>
                    <h3 className="footer-sayHello">For more info, here`s my <a
                        href="https://drive.google.com/file/d/16EttXAo0fF1gqd91Yn0lYRW7-QtgKFpK/view?usp=sharing">
                        <span className="underscore-p">resume</span></a>
                    </h3>
                    <div className="footer-nav-icons">
                        <div className="footer-nav-LinkedId"></div>
                        <div className="footer-nav-GitHub"></div>
                        <div className="footer-nav-X"></div>
                        <div className="footer-nav-Instagram"></div>
                    </div>
                </div>
                <ContactForm/>
            </div>

        </div>)

}

export default Footer