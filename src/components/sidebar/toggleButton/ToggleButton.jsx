import React from 'react'

function ToggleButton({setOpen}) {
  return (
    <button onClick={() => setOpen(prev=>!prev)} className='w-[50px] h-[50px] rounded-[50%] fixed top-[25px] left-[25px] bg-[transparent] text-[none] cursor-pointer'>
            {/* <svg width="23" height="23" viewBox="0 0 23 23">
                <path strokeWidth="3" stroke="black" strokeLinecap="round"></path>
                <path strokeWidth="3" stroke="black" strokeLinecap="round"></path>
                <path strokeWidth="3" stroke="black" strokeLinecap="round"></path>
                </svg> */}
                Button
                </button> 
    
  )
}

export default ToggleButton
