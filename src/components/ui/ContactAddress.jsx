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
        {contect_Address.map((address, index) => (
          <div
            key={address.id}
            className="border-[1px] cursor-pointer w-full bg-gray-300 animate-pulse flex-1 overflow-hidden m-[1px] hover:border-gray-600 hover:scale-95 transition-all"
          >
            <div className="min-h-24 min-w-40 grid place-items-center text-[18px] capitalize">
              location-{index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactAddress;
