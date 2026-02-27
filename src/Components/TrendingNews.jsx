import React from 'react'
import img1 from "../assets/images/trending.png";
import imgA from "../assets/images/A.png";


export default function TrendingNews() {
    return (
        <div className='mx-4 md:m-10'>
            <h2 className='text-2xl mb-8 '>Trending News</h2>
            <div className='flex flex-col lg:flex-row justify-center gap-6 lg:gap-10'>
                {/* image section */}
                <div className='w-full lg:w-[510px] h-auto'>
                    <img
                        src={img1}
                        className='w-full h-full object-cover rounded-sm max-h-[400px] sm:max-h-[480px] lg:max-h-[580px]' />
                </div>
                {/*content section*/}
                <div className='w-full max-w-full lg:max-w-[500px]'>
                    <h3 className=' leading-[54px] lg:leading-[64px] lg: text-[48px] '>Axiom Space Refines Training for Next Astronauts Mission</h3>
                    <div className='flex flex-col mt-6 md:flex-row gap-4 text-sm leanding-[22px] text-[#3D3D3D]'>
                        {/*first column */}
                        <div className='w-full md:max-w-[260px] '>
                            <div className='flex gap-4 mb-2'>
                                <img src={imgA} />
                                <p>n American company that organises visits to the International Space Station.</p>
                            </div>
                            <p className='text-[12px]'>
                                Houston-based Axiom has signed a memorandum of understanding with the
                                UK Space Agency to try to make it happen.
                                <br />
                                <br />
                                The project would probably cost £200m or more, but the idea is that it would be funded commercially.
                                There would be no contribution from UK taxpayers.
                                Axiom told the BBC that conversations with corporations and institutions
                                interested in providing finance were already under way.
                            </p>
                        </div>

                        {/*second column */}
                        <div className='w-full md:max-w-[260px]'>
                            <p className='text-[12px]'>
                                The last UK individual to go into orbit was Tim Peake,
                                who flew to the ISS as a European Space Agency (Esa) astronaut
                                in 2015.
                                <br />
                                <br />
                                "This is an exciting opportunity and actually unique," he commented.
                                "No-one has done a 'national mission', commercially, like this before. It's a new model and would be paving the
                                way for how we do space in the future."
                                <br />
                                <br />
                                Details are sparse at the moment. No crew has been chosen, nor is there a concept yet for
                                how it would be selected.
                            </p>
                        </div>
                    </div>
                    {/*Footer Of Content Section */}
                    <div className='flex flex-col sm:flex-row justify-between items-strat
                    sm:items-center my-6 gap-4 '>
                        <span className='text-[11px] text-[#3D3D3D]'>
                            Space and Universe |  9 mins read
                        </span>
                        <button className='border border-block border-[#3D3D3D] text-[#3D3D3D] rounded-2xl text-[11px] px-3 py-2  hover:bg-black hover:text-white'>Continue Reading</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
