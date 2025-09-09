import projectData from "../data/projectData"
import Project from "../ui/projet"
import SmallProject from "../ui/smallProject"
import smallProjectData from "../data/smallProjectData"
import GeekProject from "../ui/geekProject"
import GeekProjectData from "../data/geekData"


export default function Works() {
    return (
        <div className="min-h-screen px-4 sm:px-10 md:px-20 mt-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold"><span className="text-blue-500">/</span>Projects</h1>
                <h2 className="text-sm">List of my Projects</h2>
            </div>
            <div className="my-8 flex flex-col gap-8">
                <h1 className="text-2xl font-bold flex gap-1"><span className="text-blue-500">#</span>complete-apps</h1>
                <p>Full-fledged applications designed to solve real needs and deliver a smooth user experience.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projectData.map((projet, index) => (
                        <Project
                            ImageSrc={projet.image}
                            title={projet.title}
                            stack={projet.stack}
                            description={projet.description}
                            key={index}
                            link={projet.link}
                        />
                    ))}
                </div>
            </div>
            <div className="my-8 flex flex-col gap-8">
                <h1 className="text-2xl font-bold flex gap-1"><span className="text-blue-500">#</span>small-projects</h1>
                <p>Quick ideas turned into mini-prototypes, perfect for experimenting and testing new approaches.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {smallProjectData.map((projet, index) => (
                        <SmallProject
                            title={projet.title}
                            stack={projet.stack}
                            description={projet.description}
                            key={index}
                            link={projet.link}
                        />
                    ))}
                </div>
            </div>
            <div className="my-8 flex flex-col gap-8">
                <h1 className="text-2xl font-bold flex gap-1"><span className="text-blue-500">#</span>geek playground</h1>
                <p>A space where I tinker, experiment, and push code to its limits.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {GeekProjectData.map((projet, index) => (
                        <GeekProject
                            title={projet.title}
                            stack={projet.stack}
                            description={projet.description}
                            key={index}
                            link={projet.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}