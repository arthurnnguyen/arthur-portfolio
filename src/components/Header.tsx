import React from 'react'



const menu = [
    {id: 1, name: 'Home', href: "/"},
    {id: 2, name: 'Projects', href: "/projects"},
    {id: 3, name: 'Resume', href: "/resume.pdf"},
    {id: 4, name: 'Contact', href: "#contact"},
  ];

  function Header() {
    return (
        <div className="sticky top-0 z-50 flex items-center w-screen justify-between border -b-[1px] bg-[#242424]">
            <div className='w-[90px] h-[90px] bg- flex justify-center items-center bg-[#242424]'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width={1.5} 
                stroke="currentColor" 
                className="w-10 h-11 text-white">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>

            </div>
            <div className='hidden md:flex gap-14'>
                {menu.map((item) => (
                    <div className='cursor-pointer
                hover:underline font-medium'>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            <div className='w-[90px] h-[90px]
                 flex justify-center items-center'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-10 h-11 text-white">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

            </div>
        </div>
    )
}

export default Header