import { SmartphoneIcon, MailIcon, MenuIcon, PlusIcon, UserIcon, Facebook, Twitter,RssIcon, Linkedin, ChevronRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuShortcut } from "./ui/dropdown-menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { occasions, relations, valentine } from ".."

export const Header = () => {

  return (
    <header className="bg-[#f8d227] md:bg-[url('/header-image.jpg')] md:bg-cover text-center pt-5">
        <div className="max-[767px]:hidden ps-40 mb-4 flex justify-between gap-2 items-center">
            <form className="flex flex-col min-[900px]:flex-row items-center gap-2">
                <input type="text" placeholder="Search Website..."
                className="px-2 py-1 rounded"
                />
                <input type="submit" value="Submit" 
                className="text-sm px-2 bg-blue-500 text-white py-1.5 rounded self-start"
                />
            </form>
            <div className="flex gap-4 flex-wrap">
                <button className="flex flex-wrap items-center gap-1 text-sm p-1.5 bg-blue-500 text-white rounded"><UserIcon size={'14'}/> User Profile</button>
                <button className="text-sm p-1.5 bg-red-500 text-white rounded">Cart</button>
                <div className="flex gap-2 flex-wrap">
                    <button className="bg-blue-700 p-1.5 rounded text-white">
                        <Facebook size={'20'} strokeWidth={'3'}/>
                    </button>
                    <button className="bg-blue-400 p-1.5 rounded text-white">
                        <Twitter size={'20'} strokeWidth={'3'}/>
                    </button>
                    <button className="p-1.5 rounded text-white bg-orange-400">
                        <RssIcon size={'20'} />
                    </button>
                    <button className="p-1.5 rounded text-white bg-blue-300">
                        <Linkedin size={'20'} strokeWidth={'3'} />
                    </button>
                    <img src="/comodo_secure.png" alt="comodo secure logo"
                    className="px-1.5 w-[6rem]"
                    />
                </div>
            </div>
        </div>
        <div className="px-4 md:grid md:grid-cols-[1fr,_1fr,_1fr] md:items-center md:gap-3 md:ps-20 lg:ps-40">
            {/* <img src="/clickhubli_logo.png" alt="click hubli logo"
                className="w-[18rem] mx-auto py-3.5 md:w-[20rem]"
            /> */}
            <h2 className="text-[2.5rem] md:text-[3rem] mb-2 text-white italic">Project Value</h2>
            <h1 className="text-[#118C6F] text-lg leading-5 my-2.5 md:hidden">Send Flowers, Cakes, Roses, Birthday Gifts, Anniversary Gifts All over India</h1>
            <button className="bg-[#f0ad4e] border border-[#eea236] hover:bg-[#dc5e1f] px-3 py-1.5 text-white text-sm font-bold place-self-end self-baseline lg:self-center">Track Order</button>
            <div className='mt-6 pb-2.5 self-baseline lg:self-center place-self-end'>
                <p className="flex justify-center items-center gap-1 font-semibold text-sm"><SmartphoneIcon height={16}/>Call Us : +91-*****-*****</p>
                <p className="flex justify-center items-center gap-1 font-semibold text-sm"><MailIcon height={16}/>Email : project-value@gmail.com</p>
            </div>
        </div>
        <nav className="bg-[#1e7968] w-full px-4 flex gap-2 md:justify-center items-center text-white sticky top-0">            
            <DropdownMenu>
            <DropdownMenuTrigger asChild className="my-3">
                <MenuIcon height={26} className='cursor-pointer active:scale-125 md:hidden'/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100svw] mt-1 border-b-4 rounded-none border-blue-600">
                <DropdownMenuGroup className="px-4">
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">home</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">about us</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">products</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">shop by occasion</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">valentines day</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">shop by relation</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">design sarees</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">delivery cities</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">contact</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            </DropdownMenu>

            <span className="md:hidden">MENU</span>

            <ul className="flex text-[0.7rem] my-1 lg:text-[0.9rem] px-1 h-full max-[767px]:hidden">
                <li className="uppercase pr-2 flex items-center">nav1</li>
                <li className="uppercase border-l border-blue-600 px-2 flex items-center">nav2</li>
                <li className="uppercase border-l border-blue-600">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='px-3 uppercase'>
                                    nav3
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                        <ul className="w-[15rem] py-2">
                                            {valentine.map(val => 
                                                <li key={val.id} className='flex gap-2 items-center text-sm px-2 py-1.5 hover:bg-[#ffb24e] cursor-pointer hover:text-white font-medium antialiased capitalize'>
                                                    <ChevronRight size={'12'} />
                                                    {val.name}
                                                </li>
                                            )}
                                        </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </li>
                <li className="uppercase border-l border-blue-600">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='px-3 uppercase'>
                                    nav4
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[37rem] lg:w-[53.3rem] p-2 lg:pb-10 grid grid-cols-[65%,_35%] lg:grid-cols-[70%,_30%]">
                                        <div className="flex flex-col gap-4 lg:gap-12">
                                            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-5 lg:gap-0">
                                                <ul >
                                                    {occasions.list1.map(val => 
                                                        <li key={val} className='flex gap-2 items-center text-sm px-2 py-1.5 hover:text-[#ffbf6c] cursor-pointer capitalize'>
                                                            <ChevronRight size={'12'} />
                                                            {val.name}
                                                        </li>
                                                    )}
                                                </ul>
                                                <ul>
                                                    {occasions.list2.map(val => 
                                                        <li key={val} className='flex gap-2 items-center text-sm px-2 py-1.5 hover:text-[#ffbf6c] cursor-pointer capitalize'>
                                                            <ChevronRight size={'12'} />
                                                            {val.name}
                                                        </li>
                                                    )}
                                                </ul>
                                                <ul>
                                                    {occasions.list3.map(val =>
                                                        <li key={val} className='flex gap-2 items-center text-sm px-2 py-1.5 hover:text-[#ffbf6c] cursor-pointer capitalize'>
                                                        <ChevronRight size={'12'} />
                                                        {val.name}
                                                    </li>
                                                    )}
                                                </ul>
                                                <ul>
                                                    {occasions.list4.map(val => 
                                                        <li key={val} className='flex gap-2 items-center text-sm px-2 py-1.5 hover:text-[#ffbf6c] cursor-pointer capitalize'>
                                                            <ChevronRight size={'12'} />
                                                            {val.name}
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                            <p className="normal-case text-start text-[0.85rem] lg:text-[0.95rem] w-[90%]">{occasions.bottomText}</p>
                                        </div>
                                        <div className="text-left">
                                            <img src="/flowers.webp" alt="A bunch of flowers" className="mb-5" />
                                            <button className="px-4 py-2 bg-black text-white uppercase font-bold text-xs lg:text-sm hover:bg-blue-500 transition-colors duration-400">{occasions.btnText}</button>
                                        </div>

                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </li>
                <li className="uppercase border-l border-blue-600 px-3 flex items-center">nav5</li>
                <li className="uppercase border-l border-blue-600">
                <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='px-3 uppercase'>
                                nav6
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                        <ul className="w-[10rem] py-3">
                                            {relations.map(val => 
                                                <li key={val.id} className='flex gap-2 items-center text-sm px-2 py-1.5 hover:bg-[#ffbf6c] cursor-pointer capitalize'>
                                                    <ChevronRight size={'12'} />
                                                    {val.name}
                                                </li>
                                            )}
                                        </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </li>
                <li className="uppercase border-l border-blue-600 flex px-3 items-center">nav7</li>
                <li className="uppercase border-l border-blue-600 px-2 flex items-center">nav8</li>
                <li className="uppercase border-l border-blue-600 pl-3 flex items-center">nav9</li>
            </ul>
        </nav>
    </header>
  )
}
