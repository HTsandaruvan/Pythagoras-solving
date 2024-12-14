import React from 'react'

const Triangle = () => {
    return (
        <div className=' flex justify-center items-center'>
            <div className="relative flex justify-center items-end w-64 h-64 mt-10">
                <div className="absolute w-full h-full bg-gray-400 triangle"></div>
                <div className="absolute bottom-[-45px] left-[45%] text-blue-700 font-bold text-[30px]">{valA}</div>
                <div className="absolute bottom-[45%] left-[-25px] text-red-700 font-bold text-[30px]">B</div>
                <div className="absolute bottom-[45%] right-[40%] text-green-600 font-bold text-[30px]">C</div>
            </div>
        </div>
    )
}

export default Triangle