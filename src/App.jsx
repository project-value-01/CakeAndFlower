import AboutBussiness from "./AboutBussiness";
import ContactAddress from "./ContactAddress";
import Footer from "./Footer";
import PartenerPortals from "./PartenerPortals";
import TableComponent from "./TableComponent";
import TextSession from "./TextSession";

function App() {
  return (
    <div>
      <PartenerPortals />
      <ContactAddress />
      <AboutBussiness/>
      <TableComponent/>
      <TextSession/>
      <Footer/>
    </div>
  );
}

export default App;
