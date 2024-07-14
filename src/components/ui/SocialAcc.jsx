
function SocialAcc() {
  return (
    <>
        <div className="flex flex-col md:flex-row mb-5 bg-gray-200 rounded-md">
            <section className="w-full h-[21rem] mr-5 mb-5 p-3">
              <h1 className="font-bold text-xl">Lorem Ipsum Chennai</h1>
              <div className="mb-3">
                <hr className="w-1/2 bg-slate-900 h-[3px]" />
                <hr className="w-full bg-slate-800 h-[1px]" />
              </div>
              <img src="/Twitter.jpg" alt="" className="w-full h-[18rem]  rounded-lg" />
            </section>
            <section className="w-full h-[21rem] p-3">
                <h1 className="font-bold text-xl">Lorem Ipsum</h1>
                <div className="mb-3">
                  <hr className="w-1/2 bg-slate-900 h-[3px]" />
                  <hr className="w-full bg-slate-800 h-[1px]" />
                </div>
                <img src="/Website.png" alt="" className="w-full h-[18rem]  rounded-lg"/>
            </section>
        </div>
    </>
  )
}

export default SocialAcc