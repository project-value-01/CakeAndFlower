import { TestimonialsText } from "@/index"
import { UserRound } from "lucide-react"
import { MessageCircleMore } from "lucide-react"
function Testimonials() {
  return (
    <>
        <div className="px-4 py-3 border border-yellow-300 mb-5">
            <h1 className="font-bold text-xl">Testimonials</h1>
            {TestimonialsText.map(val => 
            <div key={val.id} className="p-2 border-b">
                <p className="flex text-left text-[13px]"><MessageCircleMore/>{val.text}</p>
                <p className="flex justify-end text-[13px]"><UserRound className="w-3 mr-2"/>{val.customer}</p>
            </div>
            )}
            <h1><a href="" className="underline font-semibold text-[13px] mt-2 flex justify-end text-red-800">Read more</a></h1>
        </div>
    </>
  )
}

export default Testimonials