import React, { useContext, useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import Skeleton from '../Components/Skeleton';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { Usercontext } from '../Components/Context';




function Posts({users,loading}) {

    const [finaldata, setfinaldata] = useState()
    const { logout, user,userdata } = useContext(Usercontext)

    const userid = userdata.id || userdata._id
    let token = sessionStorage.getItem('token')


  useEffect(() => {
      let joinallarray = [].concat(...users)
      
   setfinaldata(joinallarray)
  }, [users])
  
console.log(finaldata)
    
    
    
    return <>
        
        {
            finaldata?.length == 0 && !loading &&
            <div className=' max-3lg: mt-20 max-3sm:pl-20 max-3sssm:pl-6'>
            <Loading />    
            </div>
        
        }
            
       
        <div>
            

                {
                    finaldata?.map((e, i) => (
                        <Link to={`/profile/${token}/${e?.owner}`} className='mx-24 mt-5  max-3sm:mx-0' key={i}>
                        <div className="flex justify-between">
                            <div className='flex flex-row justify-center items-center cursor-pointer mx-1 max-sm:px-2'>
                                <img src={e?.profile} className=' mr-2 w-10 h-10 object-cover  border-2  border-red-600 rounded-full' />
                                    <h3 className='mr-1 font-semibold max-3ssm:text-sm'>{e.username}</h3>
                                <span className='flex flex-row justify-center items-center font-bold mr-1 text-gray-500'>.</span>
                                <span className='flex flex-row justify-center items-center mr-1 text-gray-500 max-3ssm:text-sm'>4 d</span>
                            </div>
                            <div className='flex items-center  cursor-pointer mx-2'><BsThreeDots/></div>
                        </div>
                        <div className="mt-3 ">
                            <img src={e?.posts} className='img'/>
                        </div>
                        <div className=' flex justify-between mt-3 mb-2  max-sm:px-2'>
                            <div className='flex gap-4'>
                                <span>
                                <svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" className=' max-3ssm: h-5' height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                </span>
                                <span>
                                <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" className=' max-3ssm: h-5' height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </span>
                                <span>
                                <svg aria-label="Share Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" className=' max-3ssm: h-5' height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </span>
                            </div>
                            <div>
                                <span>
                                <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" className=' max-3ssm: h-5' height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p className='mb-2 font-semibold flex gap-1 max-sm:px-2 max-3ssm:text-sm'><span>0</span><span>likes</span></p>
                            <div className='break_width'>
                                    <span className=' font-semibold max-3ssm: text-sm'>{e.username}</span> <span>{e.desc}
                            </span>
                            </div>
                            <p className='text-gray-500 mt-2 max-sm:px-0'></p>
                            <input placeholder='Add a comment...' className='comment_box mb-5 placeholder:text-gray-500 max-sm:px-2' />
                            <hr/>
                        </div>
                    </Link>
                    ))
                }
             
                </div>
        
  
      
    </>
}


export default Posts
 