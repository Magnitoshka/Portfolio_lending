import "./Body.css"
import ProjectSection from "./ProjectSection/ProjectSection.jsx";

function Body() {
    return (<>
        <hr/>
        <div className="body">


            <div className="sections-container">

                <div className="body-header-container">
                    <h1 className="body-header">Featured Projects</h1>
                    <h3 className="body-underheader">
                        Here are some of the selected
                        projects that showcase my passion for front-end development.
                    </h3>
                </div>

                <ProjectSection imgSrc="/workImages/work.png"
                                data={{
                                    zagolovok: "Promotional landing page for our favorite show",
                                    dopolnenie: "Teamed up with a designer to breathe life into a promotional webpage for our " + "beloved show, Adventure Time. Delivered a fully responsive design with dynamic content " + "capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
                                    year: "2023",
                                    role: "Front-End Developer",
                                    client: false,
                                }}
                                links={{
                                    liveDemo: "https://github.com/Magnitoshka",
                                    GitHub: "https://github.com/Magnitoshka",
                                }}


                />
                <ProjectSection imgSrc="/workImages/image 10.png"
                                data={{
                                    zagolovok: "Blog site for World News",
                                    dopolnenie: "Mastered CSS Grid complexities in building an innovative news homepage, " + "navigating intricate design decisions for a seamless user experience. " + "Leveraged the challenge to enhance skills in  front-end development.",
                                    year: "2022",
                                    role: "Front-End Developer",
                                    client: "World News",
                                    project: false,
                                }}
                                links={{

                                    ViewProject: "https://github.com/Magnitoshka"
                                }}
                />
                <ProjectSection imgSrc="/workImages/image 9.png"
                                data={{
                                    zagolovok: "E-commerce product page",
                                    dopolnenie: "Successfully crafted an engaging product page featuring a dynamic" + " lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
                                    year: "2022",
                                    role: "Front-End Developer",
                                    client: false,
                                }}
                                links={{
                                    liveDemo: "https://github.com/Magnitoshka",
                                    GitHub: "https://github.com/Magnitoshka",
                                }}

                />
            </div>

        </div>
    </>)
}

export default Body