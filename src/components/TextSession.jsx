
import { businessDetail } from "../data";

const TextSession = () => {
  return (
    <div className="w-full space-y-4 text-wrap text-slate-800 text-[15px]">
      <div>
        <h1 className="text-gray-600 text-xl">
          why the gifts are sp important ?
        </h1>
        <p className="py-2">{businessDetail.p1}</p>
        <p className="py-2">{businessDetail.p4}</p>
      </div>

      <div>
        <h1 className="text-gray-600 text-xl">
          Send the gifts for christmus to your friend . . . .{" "}
        </h1>
        <p className="py-2">{businessDetail.p4}</p>
        <p className="py-2">{businessDetail.p1}</p>
      </div>
      <div>
        <h1 className="text-gray-600 text-xl">
          Send the gifts for christmus to your friend . . . .{" "}
        </h1>
        <p className="py-2">{businessDetail.p4}</p>
        <p className="py-2">{businessDetail.p1}</p>
      </div>
    </div>
  );
};

export default TextSession;
