import { awards } from "@/index"
function Awards() {
  return (
    <>
        <div className="">
            {awards.map(val => 
                <div key={val.id} className="border-gray-300 border p-4 md:flex-row flex flex-col justify-center mb-3">
                    <img src={val.img} className="m-2 md:mr-7 rounded-full" alt="" />
                    <section className="text-left">
                        <h1 className="text-[#DA4C58] font-bold text-[.9rem] md:mb-7">{val.h1}</h1>
                        <p>{val.para}</p>
                    </section>
                </div>
            )}
        </div>
    </>
  )
}

export default Awards