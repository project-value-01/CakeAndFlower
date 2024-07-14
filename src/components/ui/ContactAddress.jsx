import { contect_Address } from "../../data";

const ContactAddress = () => {
  return (
    <div className="w-full px-2 mx-auto">
      <h1>Contact Address</h1>
      <div className="pt-2">
        <hr className="w-1/2 bg-slate-900 h-[3px]" />
        <hr className="w-full bg-slate-800 h-[1px]" />
      </div>
      <div className="grid place-items-center grid-cols-2 md:grid-cols-3 gap-2 mt-4 py-7">
        {contect_Address.map((address) => (
            <img src={address.poster} alt="" key={address.id} className="h-[8rem] w-full grid place-items-center"/>
            // <div key={index} className="min-h-24 min-w-40 grid place-items-center text-[18px] capitalize">
            //   
            // </div>
        ))}
      </div>
    </div>
  );
};

export default ContactAddress;
