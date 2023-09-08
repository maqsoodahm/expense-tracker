import HistoryItme from "./HistoryItme";

const Histery = () => {
    return (
        <>
        <h3>History</h3>
      <ul id="list" className="list">
        <HistoryItme name="salary" value="12"/>
        <HistoryItme name="bill" value="1"/>
        <HistoryItme name="safgh" value="1"/>
      </ul>
        </>
    )
}

export default Histery;