import { giftsToCites } from "@/index"
import { Link } from "lucide-react"
function SendGifts() {
  return (
    <>
      <div className="px-5 py-2 border font-medium mb-3">
        <h1 className="text-xl mb-2">Send Valentine Gifts</h1>
        <ul>
          {
            giftsToCites.map(val => 
              <li key={val.id} className="flex text-left mb-[1px] text-[13px]">
               <Link className="w-3 mr-3"/><a href=""> {val.cities}</a></li>
             )
          }
        </ul>
      </div>
    </>
  )
}

export default SendGifts