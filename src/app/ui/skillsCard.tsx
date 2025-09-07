

interface Props {
    title: string;
    techno: string[];
}


export default function SkillsCard(props: Props) {
    const {title, techno} = props
    return (
        <div className="border border-gray-400">
            <h1 className="p-2 border border-gray-400">{title}</h1>
            <div className=" grid grid-cols-2 gap-1 p-2 text-sm">
                {
                    techno.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
            </div>
        </div>
    )
}