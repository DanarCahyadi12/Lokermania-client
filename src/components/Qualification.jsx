const Qualification = ({props}) => {
    const splitedRequirements = props.requirements.split(",")
    return splitedRequirements.map((val,i) => {
        return (
                <li className="" key={i}>{val}</li>
        )
    })
}

export default Qualification