import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
export const AppContext=createContext()
export const AppContextProvider=(props)=>{
    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()
    const [allCourses,setAllCourses]=useState([])
    const [isEducator,setIsEducator]=useState(true)
    const [enrolledCourses,setEnrolledCourses]=useState([])
    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses)
    }

    //function to cal avearge rating of courses
    const calculateRating=(course)=>{
    if(course.courseRatings.length===0){
        return 0;
    }
    let totalRating=0
    course.courseRatings.forEach(rating=>{
        totalRating+=rating.rating
    })
    return totalRating/course.courseRatings.length
    }

    //function to cal course chapter time
    const calculateChaperTime=(chapter)=>{
        let time=0
        chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration)
        return humanizeDuration(time*60*1000,{units:["h","m"]})

    }

    //fuc to calculate course duration
    const calculateCourseDuration=(course)=>{
        let time=0
        course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration))
                return humanizeDuration(time*60*1000,{units:["h","m"]})





    }

    //functon to number of lecture in corse
    const calculateNoOfLectures=(course)=>{
        let totalLectures=0;
        course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totalLectures+=chapter.chapterContent.length
            }
        });
        return totalLectures;

    }

    //fetch user enrolled courses
    const fetchUserEnrolledCourses=async()=>{
        setEnrolledCourses(dummyCourses)
    }


    useEffect(()=>{
   fetchAllCourses()
   fetchUserEnrolledCourses()
    },[])


const value={

    currency,allCourses,navigate,calculateRating,
    isEducator,setIsEducator,calculateNoOfLectures,calculateCourseDuration,calculateChaperTime,
    enrolledCourses,fetchUserEnrolledCourses
}
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
