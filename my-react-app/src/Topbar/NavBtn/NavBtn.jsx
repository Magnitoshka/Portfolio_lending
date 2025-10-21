import {useNavigate} from "react-router-dom";
import "./NavBtn.css"

function NavBtn(props) {
    const navigate = useNavigate();


    const clickHandler = () => {
        navigate(props.to);
    }
    return (
        <>
            <div className="nav-btn" onClick={clickHandler}> {props.label}</div>
        </>
    )
}


export default NavBtn;