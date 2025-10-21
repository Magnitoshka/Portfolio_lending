import "./RoundButton.css"

export default function RoundButton(props) {

    return (
        <button className="round-btn">
            <img src={props.imgpath} alt="img"/>
        </button>
    )
}