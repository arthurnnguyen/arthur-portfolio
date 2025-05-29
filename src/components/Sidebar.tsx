import { IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";


function Sidebar() {
  return (
    <div className= "w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center bg-[#242424]">
            
        <h2 className='-rotate-90 tracking-widest'> Homepage</h2>
        <div className='flex flex-col gap-7 mb-10 text=[20px]'>
            <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
            <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
        </div>

    </div>
  )
}

export default Sidebar