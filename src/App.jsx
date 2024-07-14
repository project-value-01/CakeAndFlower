import AboutBussiness from "./components/AboutBussiness";
import Footer from "./components/Footer";
import TableComponent from "./components/TableComponent";
import TextSession from "./components/TextSession";
import { Floater } from "./components/Floater";
import { Header } from "./components/Header";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import CakeList from "./components/CakeList";
import ComboPackList from "./components/ComboPackList";
import PaymentsAwards from "./components/PaymentsAwards";

function App() {
  const images = ["/Cake1.jpg","/Cake2.jpg","/Cake3.jpg"];

  return (
    <>
      <div className="min-h-[100svh] bg-[url('/bg.png')] pb-3">
        <div className="max-w-6xl mx-auto bg-white">
          <Header />
          <div className="px-5">
            <Carousel images={images} />
            <ProductList />
            <CakeList></CakeList>
            <ComboPackList></ComboPackList>
            <PaymentsAwards />
            {/* <PartenerPortals />
            <ContactAddress /> */}
            <AboutBussiness />
            <TableComponent />
            <TextSession />
          </div>
          <Footer />
        </div>
      </div>
      <Floater />
    </>
  );
}

export default App;
