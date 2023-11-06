import React from "react";
// Import Icon
import {BiTimeFive} from 'react-icons/bi'
// Import Data
import Data from "../../data/jobData";

function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center mt-10">
        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-all duration-300">
          <span className="flex justify-between items-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
            <span className="flex items-center text-[#ccc] gap-1">
              <BiTimeFive/>{time}
            </span>
          </span>
            <h6 className="text-[#ccc]">
              {location}
            </h6>
            <p className="text-[13px] text-[#959595] pt-5 border-t-[2px] mt-5 group-hover:text-white">{desc}</p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="Logo Line" className="w-[15%]"/>
              <span className="py-[1rem] block group-hover:text-white">{company}</span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full font-semibold text-textColor group-hover:bg-white group-hover/item:text-textColor">Apply Now</button>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs;