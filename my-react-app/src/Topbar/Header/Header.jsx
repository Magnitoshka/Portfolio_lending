import "./Header.css"
import NavBtn from "../NavBtn/NavBtn"

function Header(props) {
    return (

        <header>
            <div className="label-container">
                <span className="label">Palkin Oleg</span>
            </div>

            <div className="nav-container">
                {/*buttons*/}
                <NavBtn to="/" label="Home"></NavBtn>
                <NavBtn to="/about" label="About"></NavBtn>
                <NavBtn to="/contact" label="Contact"></NavBtn>
            </div>
        </header>

    )
}

export default Header