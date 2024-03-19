import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){       // if it is already included in the liked courses.
            // already liked
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)) );  // prev liked courses will be filtered as on the basis if the id not equal to the current id, then it will be included in the liked courses, and the current id will be removed.
            toast.warning("Like removed!");
        }else{
            // pehle se liked nahi hai ye course
            // we have to insert this course in the liked course
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev) => [...prev,course.id]);     // this means, we have to keep the already existing ones as it is, and add the current course id as well.
            }
            toast.success("Liked successfully");
        }
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} />
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
            <button onClick={clickHandler} >
                {
                    likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                }
            </button>
            </div>
        </div>
        
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ? (course.description.substr(0,100))+"..." : (course.description)
                }
            </p>
        </div>
    </div>
  )
}

export default Card