import Header from "../Header"
import Footer from "../Footer"
import Routers from "../../routes/Routers"

export default function Layout() {
  return (
    <div className='flex  max-h-[4000px] min-h-[720px] w-full flex-col '>

      <div className='flex justify-between items-center flex-col h-full gap-6 sm:px-4 px-2 '>
        <Header />
        <Routers />
        <Footer />
      </div>




    </div>
  )
}
