import Accdetails from "./ui/Accdetails"
import Awards from "./ui/Awards"
import Cards from "./ui/Cards"
import ClickToPay from "./ui/ClickToPay"
import ContactAddress from "./ui/ContactAddress"
import PartenerPortals from "./ui/PartenerPortals"
import SendGifts from "./ui/SendGifts"
import SocialAcc from "./ui/SocialAcc"
import Testimonials from "./ui/Testimonials"
import WebDreams from "./ui/WebDreams"

function PaymentsAwards() {
  return (
    <>
        <div className="flex flex-col md:grid md:grid-cols-[25%_75%] mt-5">
            <section>
              <ClickToPay className=""/>
              {/* 1 */}
              <SendGifts className=""/>
              {/* 3 */}
              <Accdetails className=""/>
              {/* 5 */}
              <WebDreams className=""/>
              {/* /7 */}
              <Cards
                  className=""
                  h1="Holidays"
                  para= "We deliver products throughout 365 days of year including Sundays & other holidays."
              />
              {/* 9 */}
              <Cards
                  className=""
                  h1="Prices"
                  para="Products prices include all forwarding & shipping charges."
              />
              {/* 9 */}
              <Testimonials className=""/>
              {/* 11 */}
            </section>
            <section className="md:ml-7">
              <Awards className=""/>
              {/* 2,4 */}
              <SocialAcc className=""/>
              {/* 6 */}
              <PartenerPortals className=""/>
              {/* 8 */}
              <ContactAddress className=""/>
              {/* 10 */}
            </section>
        </div>
    </>
  )
}

export default PaymentsAwards