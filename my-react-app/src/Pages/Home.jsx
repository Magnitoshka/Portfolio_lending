// Home.jsx
import Body from '../Body/Body.jsx'
import "./Home.css"
import LongButton from "../Components/LongButton/LongButton.jsx"
import RoundButton from "../Components/RoundButton/RoundButton.jsx"
export default function Home() {
    return (
        <>
            <div className="hero-container">
                <div className="info">
                    <h1>HI! I AM</h1>
                    <h1>OLEG PALKIN.</h1>
                    <h3>An Odessa based front-end developer passionate about building accessible and user friendly
                        websites.</h3>
                    <div className="hero-nav">
                        <LongButton label = "CONTACT ME" flag ={true}/>
                        <RoundButton imgpath = "/src/assets/icons/bxl-linkedin.svg"/>
                        <RoundButton imgpath = "/src/assets/icons/bxl-github.svg"/>
                    </div>

                </div>
                <div className="hero-img-container">
                    <img src="../../public/hero-img.jpg" alt="hero-img"/>
                </div>


            </div>


            <Body/>
        </>
    );
}
