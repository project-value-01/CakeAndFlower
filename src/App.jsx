import AboutBussiness from "./AboutBussiness";
import Footer from "./Footer";
import TableComponent from "./TableComponent";
import TextSession from "./TextSession";
import { Floater } from "./components/Floater"
import { Header } from "./components/Header"
import PaymentsAwards from "./components/PaymentsAwards";

function App() {

  return (
    <>
      <div className="min-h-[100svh] bg-[url('/bg.png')] pb-3">
        <div className="max-w-6xl mx-auto bg-white">
          <Header/>
          <div className="px-5">
            <PaymentsAwards/>
            {/* <PartenerPortals />
            <ContactAddress /> */}
            <AboutBussiness/>
            <TableComponent/>
            <TextSession/>
            <Footer/>
          </div>
        </div>
      </div>
      <Floater/>
    </>
  )
}

export default App;
