import React from "react";
// Import Icon
import {BiTimeFive} from 'react-icons/bi'
// Import Logo
import line_logo from '../../Assets/Jobs/line_logo.png'
import apple_logo from '../../Assets/Jobs/apple_logo.png'
import tesla_logo from '../../Assets/Jobs/Tesla_T_symbol.svg.png'
import google_logo from '../../Assets/Jobs/google_logo.png'
import tokped_logo from '../../Assets/Jobs/tokped_logo.png'
import twitter_logo from '../../Assets/Jobs/twitter_logo.png'

const Data = [
  {
    id:1,
    image: line_logo,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Kami mencari Web Developer berpengalaman dengan keahlian dalam HTML, CSS, JavaScript, serta penggunaan framework web modern.',
    company: 'Novac Linus Co.'
  },
  {
    id:2,
    image: apple_logo,
    title: 'Software Enggi..',
    time: 'Now',
    location: 'Indonesia',
    desc: 'Sebagai Software Engineer di perusahaan kami, Anda akan bertanggung jawab untuk merancang, mengembangkan, Berpengalaman',
    company: 'Time Cook.'
  },
  {
    id:3,
    image: tesla_logo,
    title: 'Data Analyst',
    time: 'Now',
    location: 'USA',
    desc: 'Data Analyst di perusahaan kami, Anda akan memainkan peran kunci dalam menganalisis dan menginterpretasi data.',
    company: 'Elon Musk.'
  },
  {
    id:4,
    image: twitter_logo,
    title: 'Graphic Design',
    time: 'Now',
    location: 'USA',
    desc: 'Data Analyst di perusahaan kami, Anda akan memainkan peran kunci dalam menganalisis dan menginterpretasi data.',
    company: 'Elon Musk.'
  },
  {
    id:5,
    image: google_logo,
    title: 'Front-End Dev',
    time: 'Now',
    location: 'India',
    desc: 'Data Analyst di perusahaan kami, Anda akan memainkan peran kunci dalam menganalisis dan menginterpretasi data.',
    company: 'Sundar Pichai.'
  },
  {
    id:6,
    image: google_logo,
    title: 'Front-End Dev',
    time: 'Now',
    location: 'USA',
    desc: 'Data Analyst di perusahaan kami, Anda akan memainkan peran kunci dalam menganalisis dan menginterpretasi data.',
    company: 'Sundar Pichai.'
  },
  {
    id:7,
    image: tokped_logo,
    title: 'BackEnd Dev',
    time: 'Now',
    location: 'Indonesia',
    desc: 'Data Analyst di perusahaan kami, Anda akan memainkan peran kunci dalam menganalisis dan menginterpretasi data.',
    company: 'Melissa Siska.'
  },
  {
    id:8,
    image: line_logo,
    title: 'Data Science',
    time: 'Now',
    location: 'Jepang',
    desc: 'Data Analyst di perusahaan kami, Anda akan memainkan peran kunci dalam menganalisis dan menginterpretasi data.',
    company: 'Novac Linus Co.'
  }
]

function Jobs() {

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center mt-10">
        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
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