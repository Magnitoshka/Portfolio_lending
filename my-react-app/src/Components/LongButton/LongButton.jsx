import "./LongButton.css"

function LongButton(props) {
    return (

        <button className="long-btn">
            <div className="label-btn-container">{props.label}</div>

            {props.flag && (
                <div className="link-element-container">
                    <div className="link-element">
                        <img src="src/assets/icons/Vector.svg" alt="arrow"/>
                    </div>
                </div>
            )}

        </button>
    )

}

export default LongButton;