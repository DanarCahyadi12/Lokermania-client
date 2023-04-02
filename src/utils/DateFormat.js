const DateFormat = ({date}) => {
    const Date = date.split("T")[0].toString().split('-').join("/")
    return (
        <small>{Date}</small>
    )
}

export default DateFormat