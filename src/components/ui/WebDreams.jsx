import { webservices } from "@/index"
import { Link } from "lucide-react"

function WebDreams() {
  return (
    <>
        <div className="">
            <section className="p-3 mb-4 border border-yellow-300">
                <h1 className="text-xl mb-3">Web Design / Development <span className="text-orange-400">@LoremIpsum.com</span></h1>
                <ul>
                    {webservices.design.map(val => 
                        <li key={val.id} className="flex text-[13px]">
                           <Link className="w-3 mr-3"/> {val.text}
                        </li>
                    )}
                </ul>
            </section>
            <section className="border mb-4 border-yellow-300 p-3">
                <img src="/webservices.jpg" className="mb-3" alt="" />
                <ul>
                    {webservices.deployment.map(val => 
                        <li key={val.id} className="flex text-[13px]">
                            <Link className="w-3 mr-3"/> {val.text}
                        </li>
                    )}
                </ul>
            </section>
        </div>
    </>
  )
}

export default WebDreams