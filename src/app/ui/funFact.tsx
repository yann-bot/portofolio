
interface Props {
    fact: String

}



export default function funFact(props: Props) {
    return (
        <div className="border w-fit p-2">
            {props.fact}
        </div>
    )
}