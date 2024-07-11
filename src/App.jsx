import AboutBussiness from "./AboutBussiness";
import ContactAddress from "./ContactAddress";
import Footer from "./Footer";
import PartenerPortals from "./PartenerPortals";
import TableComponent from "./TableComponent";
import TextSession from "./TextSession";
import { Floater } from "./components/Floater"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <div className="min-h-[100svh] bg-[url('/bg.png')]">
        <div className="max-w-6xl mx-auto">
          <Header/>
          <PartenerPortals />
          <ContactAddress />
          <AboutBussiness/>
          <TableComponent/>
          <TextSession/>
          <Footer/>
        </div>
      </div>
      <Floater/>
    </>
  )
}

export default App;
