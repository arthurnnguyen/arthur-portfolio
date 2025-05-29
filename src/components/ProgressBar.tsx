import React, { useEffect, useState } from 'react'

function ProgressBar() {

    // This component is a simple progress bar that can be used to indicate loading or progress
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    },[])

  return (
    <div className='w-1.5 bg-white fixed ml-[-5px] top-[90px] h-full mb-4'>
        <div className='bg-green-600 transition-all ease-out  duration-100' style={{height: scrollTop + '%'}}>
            
        </div>
    </div>
  )
}

export default ProgressBar