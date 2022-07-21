import React from 'react'

const CardProfilePicture = ({image, name, type}) => {
  return (
    <div className='flex flex-col justify-between items-center w-16 mt-4 mb-5 sm:w-36 sm:mt-10 sm:mb-12'>
        {type === 'Add' ? 
            <>  
                <div className='flex justify-center items-center w-full h-full'>
                    <img src={image} alt="ProfilePicture2" className='w-3/4 hover:cursor-pointer' />
                </div>
                <h5 className='my-3 text-slate-600 sm:text-2xl'>{name}</h5>   
            </>
            :
            (
            <>
                <img src={image} alt="ProfilePicture2" className='w-full' />
                <h5 className='my-3 text-slate-600 sm:text-2xl'>{name}</h5>   
            </>
            )
        }
    </div>
  )
}

export default CardProfilePicture;

