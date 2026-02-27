import React from 'react'
import newsimg1 from "../assets/images/news1.png";
import newsimg2 from "../assets/images/news2.png";
import newsimg3 from "../assets/images/news3.png";
import newsimg4 from "../assets/images/news4.png";

const newsData = [
    {
        img: newsimg1,
        title: "Rocket Lab Aims to Return to Flight This Year After September Launch Failure",
        desc: "Rocket Lab aims to return to flight this year after September launch failure. The company is still investigating the Sept.",
        category: "Space and Universe",
        readTime: "3 mins read"
    },
    {
        img: newsimg2,
        title: "Space Force Planning $8 Billion Satellite Architecture for Nuclear Command and Control",
        desc: "Space Force is planning a new $8 billion satellite architecture for nuclear command and control.",
        category: "Space and Universe",
        readTime: "5 mins read"
    },
    {
        img: newsimg3,
        title: "October’s Orionids Meteor Shower are Linked to Halley’s Comet: Date, Time, How and Where to Watch",
        desc: "Want to know how to watch October’s Orionids meteor shower and contemplate the wonders of sky that are linked to Halley’s comet?",
        category: "Space and Universe",
        readTime: "5 mins read"
    },
    {
        img: newsimg4,
        title: "China Sends Three More Astronauts to Space Station",
        desc: "China has sent three astronauts to its space station to replace the current crew. The Shenzhou-17 blasted off from northwestern China.",
        category: "Space and Universe",
        readTime: "7 mins read"
    }
];

export default function NewsStories() {
  return (
    <div className='mx-10 my-8'>
        <h2 className='leading-10 text-[32px] font-bold mb-6 text-black'>Newest Stories</h2>
        <div className='grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {newsData.map((news, index) => (
                <div key={index} className='rounded-sm overflow-hidden '>
                    {/* News Stories Img*/}
                    <div className='w-[316px] h-[302px] object-cover'>
                        <img src={news.img} alt='newsimg' className='w-full h-full object-cover'/>
                    </div>

                    {/*News Stories Content*/}
                    <div className='p-4'>
                        <h3 className=' text-black text-xl font-bold leadin-[26px] my-2 line-clamp-2'>
                            {news.title}
                        </h3>
                        <p className='text-[14px] leading-[22px] my-2 line-clamp-2 text-black'>
                            {news.desc}
                        </p>
                        <span className='text-gray-500 text-[12px] my-4'>
                            {news.category} | {news.readTime}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}
