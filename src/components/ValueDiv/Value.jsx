import React from "react";
import nike_logo from '../../Assets/Value/nike_logo.png'
import adidas_logo from '../../Assets/Value/adidas_logo.png'
import puma_logo from '../../Assets/Value/puma_logo.png'

const Data = [
  {
    id:1,
    logo: nike_logo,
    name:'Nike',
    description: 'Things beinf made beautiful simple are at the heart of everything we do.'
  },
  {
    id:2,
    logo: adidas_logo,
    name:'Adidas',
    description: 'Beauty in simplicity is at the heart of everything we do.'
  },
  {
    id:2,
    logo: puma_logo,
    name:'Puma',
    description: 'Making things beautifully simple is at the core of all that we do.'
  }
]

function Value() {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] w-[400px] font-bold block">The value that holds us true and to contact</h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        {
          Data.map(({id,logo,name,description}) => {
            return (
        <div key={id} className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] w-[40px] flex items-center justify-center">
              <img src={logo} alt="" className=""/>
            </div>
            <span className="font-semibold text-textColor text-[18px]">{name}</span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">{description}</p>
        </div>
            )
          })
        }
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">Ready to switch career</h1>
          <h2 className="text-textColor text-[25px] font-bold">Let's get started</h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-12 text-[18px] font-semibold text-blueColor hover:bg-blueColor hover:text-white border-blueColor">Get Started</button>
      </div>
    </div>
  )
}

export default Value;