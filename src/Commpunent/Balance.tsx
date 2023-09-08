import IncomeEapense from "./IncomeExpense";
import Histery from "./History";
import AddTransaction from "./AddTransaction";
const Balance = () => {
    return (
        <>
            <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">$0.00</h1>

      <IncomeEapense/>

      <Histery/>

      <AddTransaction/>
    </div>
        </>
    )
}

export default Balance;