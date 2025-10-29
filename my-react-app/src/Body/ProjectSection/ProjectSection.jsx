import "./ProjectSection.css"
import InfoTable from "./InfoTable/InfoTable.jsx"
import UnderscoreButton from "/src/Components/UnderscoreButton/UnderscoreButton.jsx"

export default function ProjectSection(props) {

    return (

        <div className="container">

            <div className="project-card">
                <div className="proj-img">
                    <img src={props.imgSrc} alt=""/>
                </div>
            </div>


            <div>

                <InfoTable data={props.data}/>
                <div className="btnNav">

                    {props.links?.liveDemo && <UnderscoreButton link={props.links.liveDemo} label="LIVE DEMO"/>}
                    {props.links?.GitHub && <UnderscoreButton link={props.links.GitHub} label="SEE ON GITHUB"/>}
                    {props.links?.ViewProject &&
                        <UnderscoreButton link={props.links.ViewProject} label="VIEW PROJECT"/>}

                </div>
            </div>
        </div>


    )
}