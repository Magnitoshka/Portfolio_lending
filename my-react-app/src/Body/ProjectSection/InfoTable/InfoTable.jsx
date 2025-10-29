import "./InfoTable.css"

export default function InfoTable(props) {


    return (
        <div className="info-container">
            <h1 className="rowTitle">
                {props.data?.zagolovok}
            </h1>
            <h2 className="project-info">
                {props.data?.dopolnenie}
            </h2>

            <div className="info-table">
                <div className="row">
                    <h3 className="rowInfo">PROJECT INFO</h3>
                </div>

                {props.data?.client && (<div className="row">
                    <h3 className="rowInfo">Client</h3>
                    <h3 className="rowInfo">{props.data?.client}</h3>
                </div>)}


                {props.data?.year && (<div className="row">
                    <h3 className="rowInfo">Year</h3>
                    <h3 className="rowInfo">{props.data?.year}</h3>
                </div>)}

                {
                    props.data?.role && (<div className="row">
                        <h3 className="rowInfo">Role</h3>
                        <h3 className="rowInfo">{props.data?.role}</h3>
                    </div>)
                }

            </div>


        </div>
    )
}