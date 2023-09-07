
import AddTransaction from '@/Commpunent/AddTransaction'
import Balance from '@/Commpunent/Balance'
import Header from '@/Commpunent/Header'
import Histery from '@/Commpunent/History'
import IncomeEapense from '@/Commpunent/IncomeExpense'
export default function Home() {
  return (
    <>
      <Header />
      <Balance/>
      <IncomeEapense/>
      <Histery/>
      <AddTransaction/>
    </>
  )
}
