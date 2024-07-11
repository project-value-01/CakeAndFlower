import { Skeleton } from "./skeleton"

function SocialAcc() {
  return (
    <>
        <div className="flex flex-col md:flex-row mb-5">
            <section className="w-full h-[20rem] p-3 mb-5">
              <h1 className="font-bold text-xl">Lorem Ipsum Chennai</h1>
              <div className="pt-2 mb-3">
                <hr className="w-1/2 bg-slate-900 h-[3px]" />
                <hr className="w-full bg-slate-800 h-[1px]" />
              </div>
              <div className="mb-3">
                <Skeleton className="w-full h-10 bg-gray-500 animate-pulse"/>
              </div>
              <div className="mb-3">
                <Skeleton className="w-full bg-gray-500 h-[14rem] animate-pulse"/>
              </div>
            </section>
            <section className="w-full h-[20rem] p-3">
                <h1 className="font-bold text-xl">Lorem Ipsum</h1>
                <div className="pt-2  mb-3">
                  <hr className="w-1/2 bg-slate-900 h-[3px]" />
                  <hr className="w-full bg-slate-800 h-[1px]" />
                </div>
                <div className="mb-3">
                <Skeleton className="w-full h-10 bg-gray-500 animate-pulse"/>
              </div>
              <div className="mb-3">
                <Skeleton className="w-full bg-gray-500 h-[14rem] animate-pulse"/>
              </div>
            </section>
        </div>
    </>
  )
}

export default SocialAcc