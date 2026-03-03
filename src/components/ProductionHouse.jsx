import React from 'react'
import disney from './../assets/image/disney.png'
import marvel from './../assets/image/marvel.png'
import nationalG from './../assets/image/nationalG.png'
import pixar from './../assets/image/pixar.png'
import starwar from './../assets/image/starwar.png'

import starwarV from './../assets/videos/star-wars.mp4'
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGeographicV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'


function ProductionHouse() {
    const ProductionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:1,
            image:starwar,
            video:starwarV
        },
        {
            id:1,
            image:nationalG,
            video:nationalGeographicV
        },

    ]


  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
            {ProductionHouseList.map((item, index) => (
                <div key={index} 
                    className='border-[2px] border-gray-600 
                    rounded-lg hover:scale-110 transition-all duration-300
                    ease-in-out cursor-pointer relative shadow-xl 
                    shadow-black group' // เพิ่ม group เพื่อใช้ควบคุมลูกข้างใน
                >
                    {/* วิดีโอ: ปรับให้เต็มจอและอยู่ด้านหลังรูปภาพตอนไม่ hover */}
                    <video 
                        src={item.video} 
                        autoPlay 
                        loop 
                        playsInline 
                        muted // สำคัญ: วิดีโอจะ autoplay ได้ต้องมี muted
                        className='absolute top-0 left-0 w-full h-full 
                        object-cover rounded-lg z-0 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500'
                    />
                    
                    {/* รูปภาพโลโก้: ต้องอยู่ด้านบนวิดีโอเสมอ */}
                    <img 
                        src={item.image} 
                        className='w-full z-[1] relative' 
                    />
                </div>
            ))}
        </div>
  )
}

export default ProductionHouse
