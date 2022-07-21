import React from 'react'
import {CardProfilePicture} from '../../components';
import { ProfilePicture, ProfilePicture2, ProfilePicture3, ProfilePicture4 } from '../../assets/images';
import {AddIcon} from '../../assets/icon';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='flex h-screen bg-neutral-900 justify-center items-center px-10 sm:px-24'>
        <div className='flex flex-col justify-between items-center w-full'>
            <h2 className='text-slate-100 text-2xl sm:text-6xl'>Who's watching?</h2>
            <div className='flex justify-between w-full px-2'>
              <Link to='/login'>
                <CardProfilePicture image={ProfilePicture2} name={"1"} />
              </Link>
              <Link to='/login'>
                <CardProfilePicture image={ProfilePicture3} name={"2"}/>
              </Link>
              <Link to='/login'>
                <CardProfilePicture image={ProfilePicture} name={"3"}/>
              </Link>
              <Link to='/login'>
                <CardProfilePicture image={ProfilePicture4} name={"4"}/>
              </Link>
              <CardProfilePicture image={AddIcon} name={"Other"} type={"Add"}/>
            </div>
            <button className='bg-transparent border py-1 px-3 border-slate-500 text-slate-500 text-xs hover:bg-neutral-800 sm:text-xl'>MANAGE PROFILE</button>
        </div>
    </div>
  )
}

export default Profile;