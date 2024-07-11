/* eslint-disable react/prop-types */

function Cards({h1, para}) {
  return (
    <>
        <div className="px-4 py-3 border border-yellow-300 mb-3">
            <h1 className="text-xl font-bold">{h1}</h1>
            <p className="text-[.9rem]">{para}</p>
        </div>
    </>
  )
}

export default Cards