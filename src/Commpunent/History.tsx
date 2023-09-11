import HistoryItme from "./HistoryItme";

const Histery = () => {
  const TRANS=[
    {name:"salary" ,value:"1200000"},
    {name:"bill" ,value:"-5000"},
    {name:"study" ,value:"-5000"},
    {name:"rent" ,value:"-10000"},
  ]
    return (
        <>
        <h3>History</h3>
      <ul id="list" className="list">
        {TRANS.map(obj => (
         <HistoryItme key="obj.title" transtion={obj}/>
        ))}
        
      </ul>
        </>
    )
}

export default Histery;