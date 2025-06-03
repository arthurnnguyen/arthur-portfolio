import { IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";


function Sidebar() {
  return (
    <div className= "w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center bg-[#242424]">
            
        <h2 className='-rotate-90 tracking-widest text-white'> Homepage</h2>
        <div className='flex flex-col gap-7 mb-10 text=[20px]'>
          <a
            href="https://github.com/arthurnnguyen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white hover:text-white"                    
          >
            <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-nn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white hover:text-white"                    
          >
            <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
          </a>
        </div>
    </div>
  )
}

export default Sidebar