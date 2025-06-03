


const menu = [
    {id: 1, name: 'Home', href: "/"},
    {id: 2, name: 'Projects', href: "/projects"},
    {id: 3, name: 'Resume', href: "/resume1.pdf"},
    {id: 4, name: 'Contact', href: "/contact"},
  ];

  function Header() {
    return (
        <div className="sticky top-0 z-50 flex items-center w-screen justify-between border -b-[1px] bg-[#242424]">
            <div className='w-[90px] h-[90px] flex justify-center items-center bg-[#242424]'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width={1.5} 
                    stroke="currentColor" 
                    className="w-10 h-11 text-[#]">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>

            </div>
            <div className='hidden md:flex gap-14'>
                {menu.map(({ id, name, href }) => (
                    <div className='cursor-pointer hover:underline font-medium' key={id}>
                        <a
                            href={href}
                            target={href.endsWith(".pdf") || href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className='text-[16px] tracking-widest  hover:text-white text-white'
                        >
                            {name}
                        </a>
                    </div>
                ))}
            </div>
            <div className='w-[90px] h-[90x] flex justify-center items-center'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="size-8">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
            </div>
        </div>
    )
}

export default Header