const HistoryItme = ({name,value}:any) => {
    return (
        <>
            <li className="minus">
                {name} <span>-${value}</span><button className="delete-btn">x</button>
            </li>
            
        </>
    )
}

export default HistoryItme;