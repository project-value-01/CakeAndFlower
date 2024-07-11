import { MessageCircleIcon, PhoneIcon } from "lucide-react"

export const Floater = () => {
  return (
    <div className="flex flex-col items-center fixed -right-6 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="p-2 md:p-3 bg-green-700 text-white cursor-pointer transition-all duration-300">
            <MessageCircleIcon
            className="h-5 md:h-6"
            />
        </div>
        <div className="p-2 md:p-3 bg-[#f0ad4e] text-white cursor-pointer transition-all duration-300">
            <PhoneIcon
            className="h-4 md:h-5"
            />
        </div>
    </div>
  )
}
