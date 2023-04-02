const Title = ({title}) => {
    const slice = title.slice(0,17)
    return (
        <h5>{slice}</h5>
    )
}
export default Title