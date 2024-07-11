import { accdetails } from "@/index"
import { payments } from "@/index"
function Accdetails() {
  return (
    <>
        <div className="border border-yellow-300 mb-4">
            <section className="border-b-yellow-300 border p-4">
                <h1 className="text-[1.2rem] mb-2">Account Details</h1>
                <p className="text-sm">If you have any problem to do online payment you can do direct deposit to our following accounts</p>
            </section>
            <section className="p-4 text-[.8rem]">
                <p className="font-bold">ICBCB Bank</p>
                <ul className="">
                    {
                        accdetails.map(val => 
                            <li key={val.id}>
                                {val.name} : <span className="font-bold">{val.value}</span>
                            </li>
                        )
                    }
                </ul>
            </section>
            <h1 className="text-orange-300 text-center text-2xl">OR</h1>
            <section className="px-4 py-2">
                <ul>
                    {payments.map(val => 
                        <li key={val.id}>
                            <div className="flex gap-3 items-center mb-3">
                                <h2 className="text-xl">Pay with </h2>
                                <img src={val.img} width={val.w} className="rounded-full"  alt="" />
                            </div>
                            <div style={{ backgroundColor: val.bg }} className="p-2 text-white mb-3 text-lg">
                                {val.name} : {val.value}
                                <h2 className="text-[12px]">{val.upiid}</h2>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    </>
  )
}

export default Accdetails