import React from 'react'

function Links() {


    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About",

    ]
  return (
    <div className='absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-5'>
        
      
        {items.map((item) => {
            return(
                <a href={`#${item}`} key={item} className='text-[40px] cursor-pointer'>{item}</a>
            )
        })}
    </div>
  )
}

export default Links
