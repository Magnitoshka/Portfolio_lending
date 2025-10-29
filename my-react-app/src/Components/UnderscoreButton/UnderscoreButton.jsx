import "./UnderscoreButton.css"

export default function UnderscoreButton(props) {


    return (


        <>
            <button
                onClick={() => window.open(props.link, "_blank")}
            >
                {props.label}
                {props.label === "SEE ON GITHUB" ? (
                    <img className="GitImg" src="/icons/bxl-github.svg" alt="gitIMG" />
                ) : (
                    <img className="arrowImg" src="/icons/arrow_Green.svg" alt="arrow" />
                )}
            </button>


        </>
    )
}