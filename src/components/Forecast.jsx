import React from 'react'

function Forecast({title}) {
  return (
    <div>
      
       <div className='flex items-center justify-start mt-6'>
         <p className='text-white font-medium uppercase'> {title}</p>
       </div>
    <hr className='my-2 ' />

    <div className='flex flex-row items-center justify-between text-white'>

      <div className='flex flex-col  items-center justify-center'>
        <p className='font-light text-sm'>05:30 AM</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU7aVWzPRMBAsUzfYtzKe9wNYxZfEwrbkH_lyPj_8xrhCp6yzIAx50QSsvEMGiQt2fHU&usqp=CAU' className='w-12 my-1' alt=''/>
          <p className='font-medium ' > 32° </p>
      </div>

      <div className='flex flex-col  items-center justify-center'>
        <p className='font-light text-sm'>05:30 AM</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU7aVWzPRMBAsUzfYtzKe9wNYxZfEwrbkH_lyPj_8xrhCp6yzIAx50QSsvEMGiQt2fHU&usqp=CAU' className='w-12 my-1' alt=''/>
          <p className='font-medium ' > 32° </p>
      </div>

      <div className='flex flex-col  items-center justify-center'>
        <p className='font-light text-sm'>05:30 AM</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU7aVWzPRMBAsUzfYtzKe9wNYxZfEwrbkH_lyPj_8xrhCp6yzIAx50QSsvEMGiQt2fHU&usqp=CAU' className='w-12 my-1' alt=''/>
          <p className='font-medium ' > 32° </p>
      </div>

      <div className='flex flex-col  items-center justify-center'>
        <p className='font-light text-sm'>05:30 AM</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU7aVWzPRMBAsUzfYtzKe9wNYxZfEwrbkH_lyPj_8xrhCp6yzIAx50QSsvEMGiQt2fHU&usqp=CAU' className='w-12 my-1' alt=''/>
          <p className='font-medium ' > 32° </p>
      </div>

      <div className='flex flex-col  items-center justify-center'>
        <p className='font-light text-sm'>05:30 AM</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU7aVWzPRMBAsUzfYtzKe9wNYxZfEwrbkH_lyPj_8xrhCp6yzIAx50QSsvEMGiQt2fHU&usqp=CAU' className='w-12 my-1' alt=''/>
          <p className='font-medium ' > 32° </p>
      </div>
 
    </div>
    </div>
  )
}

export default Forecast
