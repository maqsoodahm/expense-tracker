const HistoryItme = ({transtion}:any) => {
    const {name,value}=transtion;
    return (
        <>
            <li className={value < 0 ? "minus":"plus"}>
                {name} <span>{value}</span><button className="delete-btn">x</button>
            </li>
            
        </>
    )
}

export default HistoryItme;