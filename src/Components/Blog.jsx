import React from 'react';
import blog1 from "../assets/images/blog-1.png";
import blog2 from "../assets/images/blog-2.png";
import blog3 from "../assets/images/blog-3.png";
import moreblog1 from "../assets/images/more-blog-1.png";
import moreblog2 from "../assets/images/more-blog-2.png";
import moreblog3 from "../assets/images/more-blog-3.png";
import moreblog4 from "../assets/images/more-blog-4.png";
import moreblog5 from "../assets/images/more-blog-5.png";
import moreblog6 from "../assets/images/more-blog-6.png";
import moreblog7 from "../assets/images/more-blog-7.png";
import moreblog8 from "../assets/images/more-blog-8.png";
import moreblog9 from "../assets/images/more-blog-9.png";
import moreblog10 from "../assets/images/more-blog-10.png";
import moreblog11 from "../assets/images/more-blog-11.png";
import moreblog12 from "../assets/images/more-blog-12.png";

const blogs = [
    {
        category: "Space and Universe",
        title: "Research Institute Wins $55 Million Contract for QuickSounder Weather Satellite",
        image: blog1,
        sub: [
            { image: moreblog1, title: "Scientists Identify Molten Layer Deep Within Interior of Mars" },
            { image: moreblog2, title: "Civilizations are Probably Spreading Quickly Through the Universe" },
            { image: moreblog3, title: "Researchers Identify Metals Released into the Atmosphere by Satellite Reentry" },
            { image: moreblog4, title: "SpaceX Falcon 9 Launches 23 Starlink Satellites from Cape Canaveral" },
        ]
    },
    {
        category: "Health and Science",
        title: "Dr. Natalia Vardoka Uses Science, Math and Technology in Laboratory Diagnostics",
        image: blog2,
        sub: [
            { image: moreblog5, title: "Speciality Chemicals Manufacturer Doubles Head Office, Opens Research Centre" },
            { image: moreblog6, title: "Chemistry Study Improves Method to Measure Vibrations of Solids" },
            { image: moreblog7, title: "Human Powered Health adds 'pure climber' Doebel-Hickok for 2024" },
            { image: moreblog8, title: "Source of Raw Milk Causing Illness Found, Health Officials Report" },
        ]
    },
    {
        category: "Technology",
        title: "Tesla Model Y Becomes Europe’s Top-Selling Car in September",
        image: blog3,
        sub: [
            { image: moreblog9, title: "Neuron E-scooter Access in Saskatoon Stops as Cold Weather Rolls In" },
            { image: moreblog10, title: "Qualcomm's Snapdragon X Elite Processor Gains Partnerships" },
            { image: moreblog11, title: "Indonesia Ranks Low on Internet Speed, Extends Train Trial" },
            { image: moreblog12, title: "3 New Features on the iPhone 15 Pro and 15 Pro Max You Should Know" },
        ]
    }
];


export default function Blog () {


    return (
        <div className='mx-10 my-20' >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
                {
                    blogs.map((item, index) => (
                        <div key={index} className='max-w-[432px] mx-auto' >
                            {/*header*/}
                            <div className='flex justify-between mb-2 text-[12px] text-gray-600' >
                                <span>{item.category}</span>
                                <span className='cursor-pointer' >see all...</span>
                            </div>
                            {/*blog-img*/}
                            <div>
                                <img src={item.image}
                                    className='w-[432px] h-[392px] object-cover rounded-sm'
                                />
                            </div>

                            {/*title*/}
                            <div>
                                <p className='leading-[32px] text-2xl font-semibold mt-2 line-clamp-2' >{item.title}</p>
                            </div>
                            {/*sub-blogs*/}
                            <div className='mt-4 flex flex-col gap-5' >
                                {item.sub.map((sub, i) => (
                                    <div key={i} className='flex items-center gap-3' >
                                        <img className='w-[104px] h-[56px] object-contain rounded-sm' src={sub.image} />
                                        <p className='leading-6 text-base line-clamp-2' > {sub.title} </p>
                                    </div>

                                ))}
                            </div>

                        </div>

                    ))
                }
            </div>
        </div>
    );
}

