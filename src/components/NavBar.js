function NavBar(){
    return(
        <div className="flex justify-end items-center w-full h-[80px] px-4 text-black fixed">
            <div>
            <ul className="flex font-kurale text-xl">
            <li className="px-4 hover:text-NavHover hover:underline">Home</li>
            <li className="px-4 hover:text-NavHover hover:underline">About</li>
            <li className="px-4 hover:text-NavHover hover:underline">Skills</li>
            <li className="px-4 hover:text-NavHover hover:underline">Contact</li>
            </ul>
            </div>
        </div>
    )
}
export default NavBar;